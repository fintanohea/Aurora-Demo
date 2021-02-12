import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NewsFeedPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: NewsFeedPageComponent
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
