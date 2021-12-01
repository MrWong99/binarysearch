# Check paths for binary files

This repo contains 3 ways of checking for binary files but all have the same usage.
Downloads for each version can be found on the [Releases page](https://github.com/MrWong99/binarysearch/releases).

## Usage

Go to the [Releases page](https://github.com/MrWong99/binarysearch/releases) and download one of or all the binaries you want.
Change the file to be executable:

`chmod +x <file>`

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

## Special note for Virus detection

Windows Defender tends to detect the binarysearch.exe as Virus even though it is not.
The entire Source Code used to build the binary is in this repository so you can easily check if it is malicious and even build it locally by yourself.

If you want to disable the Windows Defender threat protection for this file you can follow [this article](https://www.ghacks.net/2017/11/23/how-to-handle-failed-downloads-virus-detected-issues-on-windows-10/)
however do use caution with these procedures!
