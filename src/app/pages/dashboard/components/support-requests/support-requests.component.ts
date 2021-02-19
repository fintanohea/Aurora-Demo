import { Component, Input, Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

import { SupportRequestData } from '../../models/support-request-data';

@Component({
  selector: 'app-support-requests',
  templateUrl: './support-requests.component.html',
  styleUrls: ['./support-requests.component.scss']
})
export class SupportRequestsComponent {
  @Input() supportRequestData: SupportRequestData[];
  public displayedColumns: string[] = ['name', 'email', 'position', 'wage', 'joinDate', 'city', 'status', 'actions'];
  @ViewChild('myTable') myTable: MatTable<any>;

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService
    ) {}

  openDialog(x): void {
    const index = this.supportRequestData.indexOf(x);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: {name: x.name},
      panelClass: 'custom-modalbox'
    })
    .afterClosed()
    .subscribe(() => {
      this.supportRequestData.splice(index, 1);
      this.myTable.renderRows();
      this.toastr.success(
        '', `${x.name} deleted successfully!`
      );
    }
    );
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./support-requests.component.scss']
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
