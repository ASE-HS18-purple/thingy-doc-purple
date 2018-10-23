import {Component, OnInit} from '@angular/core';
import {ThingyDeviceService} from '../service/thingy-device.service';
import {ThingyDeviceModel} from '../model/thingy-device.model';

@Component({
  selector: 'app-thingy-device',
  templateUrl: './thingy-device.component.html',
  styleUrls: ['./thingy-device.component.css']
})
export class ThingyDeviceComponent implements OnInit {

  thingyDevices: ThingyDeviceModel[];
  contactingServer = false;

  constructor(public thingyDeviceService: ThingyDeviceService) {
  }

  ngOnInit() {
    this.loadThingyDevicesData();
  }

  loadThingyDevicesData() {
    this.contactingServer = true;
    this.thingyDeviceService.getAllThingyDevices()
      .subscribe((data: ThingyDeviceModel[]) => {
        console.log('DATA = ', data);
        this.thingyDevices = data;
        this.contactingServer = false;
      });
  }

}
