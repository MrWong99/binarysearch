#!/bin/bash

path_to_check="$1"
output_mode="$2"

if [[ -z "$path_to_check" ]]; then
  echo "You must provide a path to check as first argument!"
  exit 1
fi

if [[ "$output_mode" == "full" ]]; then
  function printFile {
    absolute_path="$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")"
    echo "$(file "$absolute_path") size: $(du -hs "$absolute_path" | sed 's/^\([^ \t]*\).*/\1/g')"
  }
elif [[ "$output_mode" == "type" ]]; then
  function printFile {
    absolute_path="$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")"
    echo "$(file "$absolute_path")"
  }
elif [[ "$output_mode" == "size" ]]; then
  function printFile {
    absolute_path="$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")"
    echo "$absolute_path: $(du -hs "$absolute_path" | sed 's/^\([^ \t]*\).*/\1/g')"
  }
else
  function printFile {
    absolute_path="$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")"
    echo "$absolute_path"
  }
fi

possible_files="$(find "$path_to_check" -type f ! -size 0 -exec file {} \; | grep -v "text\|certificate\|private key\|public key" | cut -d: -f1)"

for file in $possible_files; do
  if [[ -f $file ]]; then
    printFile $file
  fi
done
