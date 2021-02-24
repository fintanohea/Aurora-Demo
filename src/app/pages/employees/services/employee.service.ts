import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  Employee
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public loadEmployees(): Observable<Employee[]>{
    return of(
      [
        {
            name: "Tom Jones",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile2.jpg",
            location: "Johannesburg, South Africa",
            position: "Regional Director"
        },
        {
            name: "Sarah Smith",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile1.jpg",
            location: "Toronto, ON",
            position: "HR Manager"
        },
        {
            name: "Tommy Bowe",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile4.png",
            location: "Vancouver, BC",
            position: "Technician"
        },
        {
            name: "Mary Quinn",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile3.jpg",
            location: "London, UK",
            position: "IT Analyst"
        },
        {
            name: "Rebecca Jones",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile8.jpg",
            location: "Vancouver, BC",
            position: "Software Developer"
        },
        {
            name: "Dave Sterling",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile6.jpg",
            location: "Toronto, ON",
            position: "Compensation Manager"
        },
        {
            name: "Louis Rossman",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile5.jpg",
            location: "Dublin, Ireland",
            position: "Analyst Business Development"
        },
        {
            name: "Amanda Burkley",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile7.jpg",
            location: "Santiago, Chile",
            position: "Client Service Manager"
        }
      ]
    );
  }
}