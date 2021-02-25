import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  GeneralComponent,
  PositionComponent
} from './components';
import { TalentTrackPageComponent } from './containers';
import { TalentTrackRoutingModule } from './talent-track-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    TalentTrackPageComponent,
    GeneralComponent,
    PositionComponent
  ],
  imports: [
    CommonModule,
    TalentTrackRoutingModule,
    MatCardModule,
    MatToolbarModule,
    SharedModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TalentTrackPageComponent
  ]
})
export class TalentTrackModule { }
