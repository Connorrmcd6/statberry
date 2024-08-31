package handlers

import (
	"fmt"
	"net/http"
	"os"
	"runtime"
	"statberry/views/index"
	"strconv"
	"strings"

	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/mem"
)

func HandleIndex(w http.ResponseWriter, r *http.Request) error {
	return Render(w, r, index.Index())
}

func HandleData(w http.ResponseWriter, r *http.Request) error {
	data := getSystemInfo()
	return Render(w, r, index.Data(data))
}

func getSystemInfo() index.IndexData {

	// Get hostname
	hostName, err := os.Hostname()
	if err != nil {
		hostName = "unknown"
	}

	// Get platform
	platform := runtime.GOOS

	// Get architecture
	architecture := runtime.GOARCH

	// Get CPU usage per core
	cpuUsages, err := cpu.Percent(0, true)
	if err != nil {
		cpuUsages = []float64{0.0, 0.0, 0.0, 0.0}
	}

	// Get memory usage
	vmStat, err := mem.VirtualMemory()
	if err != nil {
		vmStat = &mem.VirtualMemoryStat{}
	}

	// Convert memory usage to GB
	memoryUsedGB := float64(vmStat.Used) / 1e9
	memoryTotalGB := float64(vmStat.Total) / 1e9

	// Get host temperature (dummy value as gopsutil does not support temperature directly)
	temperature := getCPUTemperature()

	return index.IndexData{
		HostName:        hostName,
		Platform:        platform,
		Architecture:    architecture,
		CPUTemp:         temperature,
		Core0Usage:      cpuUsages[0],
		Core1Usage:      cpuUsages[1],
		Core2Usage:      cpuUsages[2],
		Core3Usage:      cpuUsages[3],
		MemoryUsage:     memoryUsedGB,
		MemoryUsagePerc: vmStat.UsedPercent,
		MemoryTotal:     memoryTotalGB,
	}
}

func getCPUTemperature() float64 {
	data, err := os.ReadFile("/sys/class/thermal/thermal_zone0/temp")
	if err != nil {
		fmt.Println("Error reading CPU temperature:", err)
		return 0.0
	}

	tempStr := strings.TrimSpace(string(data))
	tempMilliCelsius, err := strconv.Atoi(tempStr)
	if err != nil {
		fmt.Println("Error converting CPU temperature:", err)
		return 0.0
	}

	// Convert millidegrees Celsius to degrees Celsius
	return float64(tempMilliCelsius) / 1000.0
}
