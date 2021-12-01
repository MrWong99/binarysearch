package main

import (
	"fmt"
	"io/fs"
	"os"
	"path"
	"path/filepath"
	"strings"

	"github.com/MrWong99/binarysearch/extensions"
)

func main() {
	argLength := len(os.Args[1:])
	if argLength < 1 {
		fmt.Println("You must provide a path to check as first argument!")
		os.Exit(1)
	}

	dirToCheck := os.Args[1]
	var printFile func(string)
	if argLength < 2 {
		printFile = func(file string) {
			fmt.Println(file)
		}
	} else {
		switch os.Args[2] {
		case "full":
			printFile = func(file string) {
				fileStat, err := os.Stat(file)
				ext := path.Ext(file)
				if err != nil {
					fmt.Printf("%s: %s\n", file, ext)
				} else {
					fmt.Printf("%s: %s size: %s\n", file, ext, byteCountDecimal(fileStat.Size()))
				}
			}
		case "type":
			printFile = func(file string) {
				ext := path.Ext(file)
				fmt.Printf("%s: %s\n", file, ext)
			}
		case "size":
			printFile = func(file string) {
				fileStat, err := os.Stat(file)
				if err != nil {
					fmt.Println(file)
				} else {
					fmt.Printf("%s: %s\n", file, byteCountDecimal(fileStat.Size()))
				}
			}
		default:
			printFile = func(file string) {
				fmt.Println(file)
			}
		}
	}

	filepath.Walk(dirToCheck, func(path string, info fs.FileInfo, err error) error {
		if err != nil {
			fmt.Printf("Error while checking path '%s': %v", path, err)
			return nil
		}
		if isBinary(path) {
			printFile(path)
		}
		return nil
	})
}

func byteCountDecimal(b int64) string {
	const unit = 1000
	if b < unit {
		return fmt.Sprintf("%d B", b)
	}
	div, exp := int64(unit), 0
	for n := b / unit; n >= unit; n /= unit {
		div *= unit
		exp++
	}
	return fmt.Sprintf("%.1f %cB", float64(b)/float64(div), "kMGTPE"[exp])
}

func isBinary(file string) bool {
	ext := strings.ToLower(strings.TrimLeft(path.Ext(file), "."))
	return extensions.Ext[ext]
}
