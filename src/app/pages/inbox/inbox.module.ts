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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

import { InboxPageComponent } from './containers';
import { InboxRoutingModule } from './inbox-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [InboxPageComponent],
  imports: [
    CommonModule,
    InboxRoutingModule,
    MatCardModule,
    MatToolbarModule,
    SharedModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule
  ]
})
export class InboxModule { }
