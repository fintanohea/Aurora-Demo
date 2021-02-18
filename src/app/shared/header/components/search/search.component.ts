import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public isShowInput = true;

  public showInput(): void {
    this.isShowInput = true;
  }
}
