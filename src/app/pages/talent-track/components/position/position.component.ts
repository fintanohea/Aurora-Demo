import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../../models';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})



export class PositionComponent implements OnInit{
  // @Input() employee: Employee;
  positionDetailsForm: FormGroup;
  positionDatesForm: FormGroup;
  employmentForm: FormGroup;
  showPositionDetailsForm: boolean = false;
  showPositionDatessForm: boolean = false;
  showEmploymentsForm: boolean = false;

  positionDetails = {
    positionId: {
      id: 'positionId',
      label: 'Position ID',
      value: 'E4gt5672'
    },
    positionTitle: {
      id: 'positionTitle',
      label: 'Position Title',
      value: 'Regional Director'
    },
    jobGroup: {
      id: 'jobGroup',
      value: 'Marketing',
      label: 'Job Group'
    },
    jobFamily: {
      id: 'jobFamily',
      value: 'Management',
      label: 'Job Family'
    },
    projectTeam: {
      id: 'projectTeam',
      value: 'Titan',
      label: 'Project Team'
    },
    marketView: {
      id: 'marketView',
      value: '',
      label: 'Market View'
    }
  }

  positionDates = {
    origHireDate: {
      id: 'origHireDate',
      value: '01-Oct-2018',
      label: 'Orig Hire Date'
    },
    rehireDate: {
      id: 'rehireDate',
      value: '',
      label: 'Rehire Date'
    },
    currentSiteDate: {
      id: 'currentSiteDate',
      value: '',
      label: 'Current Site Date'
    },
    currentRoleDate: {
      id: 'currentRoleDate',
      value: '',
      label: 'Current Role Date'
    },
    contractStartDate: {
      id: 'contractStartDate',
      value: '',
      label: 'Contract Start Date'
    },
    contractEndDate: {
      id: 'contractEndDate',
      value: '',
      label: 'Contract End Date'
    }
  }

  employment = {
    employmentStatus: {
      id: 'employmentStatus',
      value: '(D) Active',
      label: 'Employment Status'
    },
    employmentGroup: {
      id: 'employmentGroup',
      value: 'Contract',
      label: 'Employment Group'
    },
    employmentCategory: {
      id: 'employmentCategory',
      value: 'Hourly',
      label: 'Employment Category'
    },
    employmentType: {
      id: 'employmentType',
      value: 'Open-Ended Contract',
      label: 'Employment Type'
    },
  }
    
  constructor(
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.positionDetailsForm = this.fb.group({
      positionId: [this.positionDetails.positionId.value],
      positionTitle: [this.positionDetails.positionTitle.value],
      jobGroup: [this.positionDetails.jobGroup.value],
      jobFamily: [this.positionDetails.jobFamily.value],
      projectTeam: [this.positionDetails.projectTeam.value],
      marketView: [this.positionDetails.marketView.value]
    });

    this.positionDatesForm = this.fb.group({
      origHireDate: [this.positionDates.origHireDate.value],
      rehireDate: [this.positionDates.rehireDate.value],
      currentSiteDate: [this.positionDates.currentSiteDate.value],
      currentRoleDate: [this.positionDates.currentRoleDate.value],
      contractStartDate: [this.positionDates.contractStartDate.value],
      contractEndDate: [this.positionDates.contractEndDate.value],
    });

    this.employmentForm = this.fb.group({
      employmentStatus: [this.employment.employmentStatus.value],
      employmentGroup: [this.employment.employmentGroup.value],
      employmentCategory: [this.employment.employmentCategory.value],
      employmentType: [this.employment.employmentType.value],
    });
  }

  togglePositionDetailsForm(){
    this.showPositionDetailsForm = !this.showPositionDetailsForm;
  }

  togglePositionDatesForm(){
    this.showPositionDatessForm = !this.showPositionDatessForm;
  }

  toggleEmploymentForm(){
    this.showEmploymentsForm = !this.showEmploymentsForm;
  }

  updateData(data, form){
    for (const [key, value] of Object.entries(form)) {
      // console.log(`${key}: ${value}`);
      data[key].value = value;
    }

    this.toastr.success('', `Updated successfully!`);
  }

  

}
