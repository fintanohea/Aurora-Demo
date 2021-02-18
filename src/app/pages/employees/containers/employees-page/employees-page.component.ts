import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../../models';
import { EmployeeService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss']
})
export class EmployeesPageComponent implements OnInit {
  employees$: Observable<Employee[]>;
  
  constructor(
    private toastr: ToastrService,
    private employeeService: EmployeeService
  ) {
    this.employees$ = this.employeeService.loadEmployees();
  }

  ngOnInit() {
  }
  
}
