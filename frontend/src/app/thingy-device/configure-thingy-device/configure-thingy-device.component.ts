import {Component, OnInit} from '@angular/core';
import {ThingyDeviceService} from '../../service/thingy-device.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-thingy-device',
  templateUrl: './configure-thingy-device.component.html',
  styleUrls: ['./configure-thingy-device.component.css']
})
export class ConfigureThingyDeviceComponent implements OnInit {

  form: FormGroup;
  formBuilder: FormBuilder;
  contactingServer = false;
  message: string;

  constructor(public thingyDeviceService: ThingyDeviceService,
              public activeModal: NgbActiveModal,
              fb: FormBuilder) {
    this.formBuilder = fb;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      location: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      deviceId: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }


}
