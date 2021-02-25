import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../../models';
import { EmployeeService } from '../../services';
import { Observable } from 'rxjs';
import { GeneralComponent } from '../../components/index';

@Component({
  selector: 'app-talent-track-page',
  templateUrl: './talent-track-page.component.html',
  styleUrls: ['./talent-track-page.component.scss']
})
export class TalentTrackPageComponent implements OnInit {
  employees$: Observable<Employee[]>;
  tabs = [
    {
      label: "General",
      link: "<app-general></app-general>"
    },
    {
      label: "Position",
      link: "position"
    }
  ];

  tabLoadTimes = [];

  components = [GeneralComponent];
  @ViewChild('tabContent') tabContent: ViewContainerRef;
  

  constructor(
    private toastr: ToastrService,
    private employeeService: EmployeeService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.employees$ = this.employeeService.loadEmployees();
  }

  ngOnInit() {
  }

  loadComponent(index: number) {
    console.log("here")
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(GeneralComponent);

    return this.tabContent.createComponent(componentFactory);
  }
  
}
