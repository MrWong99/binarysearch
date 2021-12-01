# Check paths for binary files

This repo contains 3 ways of checking for binary files but all have the same usage.
Downloads for each version can be found on the [Releases page](/releases).

## Usage

```sh
$> ./binarysearch[.exe] "<path>" [<mode>] # Uses a very fast Go binary -> this should be preferred for speed
$> ./scan_git_repo_for_binary.sh "<path>" [<mode>] # Uses "git log"
$> ./scan_folder_for_binary.sh "<path>" [<mode>] # Uses find and the "file" utility
```

* **path:** The path that should be checked for binary files. This is **required!**.
* **mode:** The output mode for each result:
  * *not set*: Only output the file path.
  * *size*: Outputs `<path>: <size>`
  * *type*: Outputs `<path>: <type>`
  * *full*: Outputs `<path>: <type> size: <size>`

## Build

To build the Go binary for your operating system yourself you need to install Go and then run

`go build .`
