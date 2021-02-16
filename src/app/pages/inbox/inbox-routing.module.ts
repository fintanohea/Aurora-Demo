import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { InboxPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: InboxPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class InboxRoutingModule {
}
