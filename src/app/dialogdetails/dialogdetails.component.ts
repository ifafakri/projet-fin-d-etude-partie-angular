import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{ServiceAdminService} from './../serviceAdmin/service-admin.service';

@Component({
  selector: 'app-dialogdetails',
  templateUrl: './dialogdetails.component.html',
  styleUrls: ['./dialogdetails.component.css']
})
export class DialogdetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogdetailsComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  
  }
  



}
