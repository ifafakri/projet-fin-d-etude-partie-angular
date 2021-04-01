import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ServiceAdminService} from './../serviceAdmin/service-admin.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-ajouter-membredialog',
  templateUrl: './ajouter-membredialog.component.html',
  styleUrls: ['./ajouter-membredialog.component.css']
})
export class AjouterMembredialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjouterMembredialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private serv:ServiceAdminService) { }

    d=new Date().getFullYear().toLocaleString()
    message=false
  membre:{
    nom:string,prenom:string,
    dnais:string,
numtel:string,
mail:string,
poste:string,
 dateposte:string,
 motpass:string
  }
  ngOnInit(): void {
    this.serv.ListeMembre().subscribe(d =>{
      console.log(d)
    })

  }
  Ajouter(form:NgForm){
    this.membre=form.value
    this.membre.dateposte=this.d
console.log(this.membre)
this.serv.AjouterMembre(this.membre).subscribe()
this.message=true

  }
}
