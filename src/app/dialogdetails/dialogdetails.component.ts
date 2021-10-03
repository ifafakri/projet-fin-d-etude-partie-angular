import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{ServiceAdminService} from './../serviceAdmin/service-admin.service';
export interface PeriodicElement {
 
  _id:number
  nom: string;

  prenom: string;

  dnais:string;
  numtel:string;
  mail:string;
  poste:string;
  dateposte:string;
  image:string
  motpass:string;


}
@Component({
  selector: 'app-dialogdetails',
  templateUrl: './dialogdetails.component.html',
  styleUrls: ['./dialogdetails.component.css']
})
export class DialogdetailsComponent implements OnInit {

  d:PeriodicElement
  constructor(public dialogRef: MatDialogRef<DialogdetailsComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private serv:ServiceAdminService) { }

 async ngOnInit() {
  
  await  this.serv.getMembre(this.data.mail).subscribe(data=>{
 
      this.d=data
   console.log()
 
 })

console.log((this.d) )

  }
  



}
