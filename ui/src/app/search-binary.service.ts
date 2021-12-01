import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

export interface Mode {
  key: string,
  name: string
}

export interface FileData {
  path: string,
  type: string,
  size: string
}

@Injectable({
  providedIn: 'root'
})
export class SearchBinaryService {
  baseUrl: string = 'search-binary';

  constructor(private httpClient: HttpClient) { }

  /**
   * Get the file data.
   * @param path path to scan
   * @param mode output format (path, type, size, full)
   * @returns array with the requested file data
   */
  getFileData(path: string, mode: string): Observable<FileData[]> {
    let params = new HttpParams();
    let body = {path: path};
    params = params.append('mode', mode);
    return this.httpClient.post<FileData[]>(this.baseUrl, body, {params: params});
  }
}
