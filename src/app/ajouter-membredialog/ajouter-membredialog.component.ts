import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ServiceAdminService} from './../serviceAdmin/service-admin.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, Subscriber } from 'rxjs';
import {AcceeServiceService} from './../accee/accee-service.service';
interface poste {
  nomPoste:string
}
@Component({
  selector: 'app-ajouter-membredialog',
  templateUrl: './ajouter-membredialog.component.html',
  styleUrls: ['./ajouter-membredialog.component.css']
})
export class AjouterMembredialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AjouterMembredialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private serv:ServiceAdminService,private acs:AcceeServiceService) { }

    d=new Date().getFullYear().toLocaleString()
    message=false
  membre:{
    nom:string,prenom:string,
    dnais:string,
numtel:string,
mail:string,
poste:string,
 dateposte:string,
 motpass:string,
 image:string
  }


f:File
im:string=''

post:poste[]

 async ngOnInit() {
await this.acs.GetPost().toPromise().then(
(data:poste[])=>{
  this.post=data
}

)


 await   this.serv.ListeMembre().subscribe(d =>{
      console.log(d)
    })

  }
async  upload(event){
  this.f=event.target.files[0]
await this.convertto64(this.f).toPromise().then(
(data:string)=>{
  this.im=data
}

)


  }


  convertto64(file:File){
    const observable=new Observable((subscriber:Subscriber<any>)=>{
  this.readFile(file,subscriber)
    })
  return observable;
  
  
  }
  
  readFile(file:File,subsciber:Subscriber<any>){
    const fileRader=new FileReader()
    fileRader.readAsDataURL(file)
    fileRader.onload=()=>{
      subsciber.next(fileRader.result)
      subsciber.complete()
    }
    fileRader.onerror=(error)=>{
      subsciber.error(error)
      subsciber.complete()
    }
  
  }



  Ajouter(form:NgForm){
    this.membre=form.value
    this.membre.dateposte=this.d
    this.membre.image=this.im
console.log(this.membre)
this.serv.AjouterMembre(this.membre).subscribe()
this.message=true





  }
}
