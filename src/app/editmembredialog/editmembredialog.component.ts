import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, Subscriber } from 'rxjs';
import{ServiceAdminService} from './../serviceAdmin/service-admin.service';
import { ToastrService } from 'ngx-toastr';


import {AcceeServiceService} from './../accee/accee-service.service';
interface poste {
  nomPoste:string
}
@Component({
  selector: 'app-editmembredialog',
  templateUrl: './editmembredialog.component.html',
  styleUrls: ['./editmembredialog.component.css']
})
export class EditmembredialogComponent implements OnInit {
post:poste[]
  constructor(public dialogRef: MatDialogRef<EditmembredialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private serv:ServiceAdminService,private ascv:AcceeServiceService,private toast:ToastrService) { }

  ngOnInit(): void {
this.ascv.GetPost().toPromise().then(
(data:poste[])=>{
  this.post=data
}

)


  }
  val:string="test"
  f:File
  im:string
  d=new Date().getFullYear().toLocaleString()
  message=false
  membre:{
    nom:string,prenom:string,
    dnais:string,
numtel:string,
mail:string,
poste:string,
 dateposte:string,motpass:string,
 image:string
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



  modifier(form:NgForm){

    this.membre=form.value
    this.membre.image=this.im
    this.membre.dateposte=this.d
this.serv.modifier(this.membre).subscribe(data=>{
 this.message=true
})

 

  console.log(form.value)
 }


 modifPost(f:NgForm){

this.serv.modifmembrepost({poste:f.value.poste,mail:this.data.mail}).subscribe()

this.toast.warning(' ',' la poste du membre modifier')

 }



}
