import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../../models';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employee: Employee;
  
  constructor(
    private toastr: ToastrService
  ) {}

}
