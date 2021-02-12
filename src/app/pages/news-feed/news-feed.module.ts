import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FlexLayoutModule} from "@angular/flex-layout";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



import { NewsFeedPageComponent } from './containers';
import { NewsFeedRoutingModule } from './news-feed-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [NewsFeedPageComponent],
  imports: [
    CommonModule,
    NewsFeedRoutingModule,
    MatCardModule,
    MatToolbarModule,
    SharedModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class NewsFeedModule { }
