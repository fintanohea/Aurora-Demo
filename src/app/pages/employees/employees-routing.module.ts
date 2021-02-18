import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmployeesPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: EmployeesPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class NewsFeedRoutingModule {
}
