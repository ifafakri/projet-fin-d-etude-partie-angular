import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{ServiceAdminService} from './../serviceAdmin/service-admin.service';


@Component({
  selector: 'app-editmembredialog',
  templateUrl: './editmembredialog.component.html',
  styleUrls: ['./editmembredialog.component.css']
})
export class EditmembredialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditmembredialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private serv:ServiceAdminService) { }

  ngOnInit(): void {

  }
  val:string="test"
  d=new Date().getFullYear().toLocaleString()
  message=false
  membre:{
    nom:string,prenom:string,
    dnais:string,
numtel:string,
mail:string,
poste:string,
 dateposte:string,motpass:string
  }
  modifier(form:NgForm){

    this.membre=form.value
    
    this.membre.dateposte=this.d
this.serv.modifier(this.membre).subscribe(data=>{
 this.message=true
})

 

  console.log(form.value)
 }
}
