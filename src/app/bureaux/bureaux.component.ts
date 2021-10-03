import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { NgForm } from '@angular/forms';
import{LoginserviceService} from './../loginservice/loginservice.service';

import { ToastrService } from 'ngx-toastr';
import {ServiceAdminService} from './../serviceAdmin/service-admin.service';
interface bureaux{
  _id:number,
  nom:string,
  prenom:string,
 description:string,
    mail:string,
    poste:string,
    image:string,
}

@Component({
  selector: 'app-bureaux',
  templateUrl: './bureaux.component.html',
  styleUrls: ['./bureaux.component.css']
})




export class BureauxComponent implements OnInit {


  listB:bureaux[]


  constructor(private sa:ServiceAdminService
    ,private toast:ToastrService
    ,private logserv:LoginserviceService
    ) { }

  async ngOnInit() {
    var token=localStorage.getItem('token')
 

    let email=await this.logserv.isConnect({t:token})
  
  
    this.sa.GetBureaux().toPromise().then(
      (data:bureaux[])=>{
        this.listB=data
      }
    )



  }


i1:File
imdata:string



  convertto64(file:File){
    const observable=new Observable((subscriber:Subscriber<any>)=>{
  this.readFile(file,subscriber)
    })
  return observable;
  
  
  }
  
 async  changerImage(event){
this.i1=event.target.files[0]
await this.convertto64(this.i1).toPromise().then(
  (data:string)=>{this.imdata=data})


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


  AjoutPerson(Form:NgForm){


    this.sa.AjoutPerson({  nom:Form.value.nom,
      prenom:Form.value.prenom,
      description:Form.value.description,
        mail:Form.value.mail,
        poste:Form.value.poste,
        image:this.imdata,
    }).subscribe()



  }
  supprimerBureaux(id){
    this.sa.supprimerPersonBureaux(id).subscribe()

    this.toast.error('supprimer ')
  }





}
