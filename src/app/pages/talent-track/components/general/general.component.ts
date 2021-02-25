import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../../models';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})



export class GeneralComponent implements OnInit{
  // @Input() employee: Employee;
  personalDetailsForm: FormGroup;
  generalAddressForm: FormGroup;
  mailingAddressForm: FormGroup;
  showPersonalDetailsForm: boolean = false;
  showGeneralAddresssForm: boolean = false;
  showMailingAddresssForm: boolean = false;

  personalDetails = {
    eeid: {
      id: 'eeid',
      value: 'tjones',
      label: 'Client EEID'
    },
    username: {
      id: 'username',
      value: 'tjones',
      label: 'Username'
    },
    firstname: {
      id: 'firstname',
      value: 'Tom',
      label: 'First Name'
    },
    lastname: {
      id: 'lastname',
      value: 'Jones',
      label: 'Last Name'
    },
    prefferedname: {
      id: 'prefferedname',
      value: 'Tommy',
      label: 'Preferred Name'
    },
    email: {
      id: 'email',
      value: 't.jones@hubbubhe.com',
      label: 'Email Address'
    },
  }

  generalAddress = {
    street: {
      id: 'street',
      value: '123 Park Lane',
      label: 'Street Address'
    },
    city: {
      id: 'city',
      value: 'Johannesburg',
      label: 'City'
    },
    province: {
      id: 'province',
      value: 'Gauteng',
      label: 'Province'
    },
    zip: {
      id: 'zip',
      value: 'M5J 2Z3',
      label: 'Zip'
    }
  }

  mailingAddress = {
    street: {
      id: 'street',
      value: '123 Park Lane',
      label: 'Street Address'
    },
    city: {
      id: 'city',
      value: ' Johannesburg',
      label: 'City'
    },
    province: {
      id: 'province',
      value: 'Gauteng',
      label: 'Province'
    },
    zip: {
      id: 'zip',
      value: 'M5J 2Z3',
      label: 'Zip'
    }
  }
    
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.personalDetailsForm = this.fb.group({
      eeid: [this.personalDetails.eeid.value],
      username: [this.personalDetails.username.value],
      firstname: [this.personalDetails.firstname.value],
      lastname: [this.personalDetails.lastname.value],
      prefferedname: [this.personalDetails.prefferedname.value],
      email: [this.personalDetails.email.value]
    });

    this.generalAddressForm = this.fb.group({
      street: [this.generalAddress.street.value],
      city: [this.generalAddress.city.value],
      province: [this.generalAddress.province.value],
      zip: [this.generalAddress.zip.value],
    });

    this.mailingAddressForm = this.fb.group({
      street: [this.mailingAddress.street.value],
      city: [this.mailingAddress.city.value],
      province: [this.mailingAddress.province.value],
      zip: [this.mailingAddress.zip.value],
    });
  }

  togglePersonalDetailsForm(){
    this.showPersonalDetailsForm = !this.showPersonalDetailsForm;
  }

  toggleGeneralAddressForm(){
    this.showGeneralAddresssForm = !this.showGeneralAddresssForm;
  }

  toggleMailingAddressForm(){
    this.showMailingAddresssForm = !this.showMailingAddresssForm;
  }

  updateData(data, form){
    for (const [key, value] of Object.entries(form)) {
      // console.log(`${key}: ${value}`);
      data[key].value = value;
    }

    this.toastr.success('', `Updated successfully!`);
  }

  

}
