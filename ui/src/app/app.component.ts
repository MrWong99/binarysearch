import { OnInit, Component } from '@angular/core';
import { SearchBinaryService, Mode, FileData } from './search-binary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'search-binary';
  path: string = '';
  selectedMode: Mode;
  modes: Mode[] = [
    {name: 'Path Only', key: 'path'},
    {name: 'Type', key: 'type'},
    {name: 'Size', key: 'size'},
    {name: 'All', key: 'full'}
  ];
  fileData: FileData[] = [
    {
    "path": "opt/kisters/file1.ts",
    "type": "TS File",
    "size": "5MB"
    },
    {
    "path": "opt/kisters/file2.ts",
    "type": "TS File",
    "size": "1MB"
    },
    {
    "path": "opt/kisters/file3.ts",
    "type": "TS File",
    "size": "3MB"
    },
    {
    "path": "opt/kisters/file4.ts",
    "type": "TS File",
    "size": "4MB"
    },
    {
    "path": "opt/kisters/file5.ts",
    "type": "TS File",
    "size": "4,5MB"
    },
    {
    "path": "opt/kisters/file6.ts",
    "type": "TS File",
    "size": "1,5MB"
    },
    {
      "path": "opt/kisters/file7.ts",
      "type": "TS File",
      "size": "1,5MB"
    },
    {
      "path": "opt/kisters/file8.ts",
      "type": "TS File",
      "size": "1,5MB"
    },
    {
      "path": "opt/kisters/file6.ts",
      "type": "TS File",
      "size": "1,5MB"
    },
    {
      "path": "opt/kisters/file6.ts",
      "type": "TS File",
      "size": "1,5MB"
    },
    {
      "path": "opt/kisters/file6.ts",
      "type": "TS File",
      "size": "1,5MB"
    }
];

  constructor(private searchBinaryService: SearchBinaryService) {
    this.selectedMode = this.modes[0];
  }
  
  ngOnInit() {
  }

  submit() {
    this.searchBinaryService.getFileData(this.path, this.selectedMode.key).subscribe(data => {
      if (data && data.length > 0) {
        this.fileData = data;
      }
    });
  }
}
