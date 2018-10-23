import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ThingyDeviceService {

  basicURI = 'http://localhost:3000/thingy';

  constructor(public httpClient: HttpClient) {
  }

  public getAllThingyDevices() {
    return this.httpClient.get(this.basicURI);
  }

}
