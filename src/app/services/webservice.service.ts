import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '@ionic/angular';

@Injectable()
export class Webservice {
  constructor(private http: HttpClient) { }

  configUrl = 'https://client.eaceprep.com/ocrscanner/api/api.php';

getConfig() {
  return this.http.get<Config>(this.configUrl);
}
}