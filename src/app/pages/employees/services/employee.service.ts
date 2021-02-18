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
            name: "John Wick",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile1.jpg",
            location: "Vancouver, BC",
            position: "Regional Director"
        },
        {
            name: "Frank Abigale",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile1.jpg",
            location: "Vancouver, BC",
            position: "Regional Director"
        },
        {
            name: "Steve Williams",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile1.jpg",
            location: "Vancouver, BC",
            position: "Regional Director"
        },
        {
            name: "Jenn Marsh",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile1.jpg",
            location: "Vancouver, BC",
            position: "Regional Director"
        },
        {
            name: "Rebecca Jones",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile1.jpg",
            location: "Vancouver, BC",
            position: "Regional Director"
        },
        {
            name: "Jodie Foster",
            email: "johnwick@gmail.com",
            profileImg: "/assets/profile-pics/profile1.jpg",
            location: "Vancouver, BC",
            position: "Regional Director"
        }
      ]
    );
  }
}