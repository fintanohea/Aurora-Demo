import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TalentTrackPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: TalentTrackPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class TalentTrackRoutingModule {
}
