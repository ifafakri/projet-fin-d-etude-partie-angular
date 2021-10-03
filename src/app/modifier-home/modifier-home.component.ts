import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import{PageServiceService} from './../pages-service/page-service.service';
import{LoginserviceService} from './../loginservice/loginservice.service';
import{AcceeServiceService} from './../accee/accee-service.service';
import { ToastrService } from 'ngx-toastr';

export interface PeriodicElement {
  _id:number
  nom: string;

  prenom: string;

  dnais:string;
  numtel:string;
  mail:string;
  poste:string;
  dateposte:string;
  motpass:string;



}
interface obj{
image:string,
description:string
}
interface page{
  home:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    historique:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    adhesion:[{titre:string,description:string},{titre:string,description:string},{titre:string,description:string}],
    presentation:[{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string}]
}
interface home{
  vision:{titre:string,description:string},
  mission:{titre:string,description:string},
  presentation:{titre:string,description:string,image:string},
  credo:{titre:string,description:string},
  
  }

@Component({
  selector: 'app-modifier-home',
  templateUrl: './modifier-home.component.html',
  styleUrls: ['./modifier-home.component.css']
})

export class ModifierHomeComponent implements OnInit {
selectedFile:File
obj1:obj
obj2:obj
t:page
m:PeriodicElement
h:home
  dat : string = new Date().toDateString();
  constructor(private pserv:PageServiceService,private logsrv:LoginserviceService,private acsrv:AcceeServiceService
 ,private toast:ToastrService   ) { }

 async ngOnInit() {

    var token=localStorage.getItem('token')
 

    let email=await this.logsrv.isConnect({t:token})
  console.log(email)
  
this.logsrv.getMembre(email).toPromise().then(
  (data:PeriodicElement)=>{
this.m=data


  }
)





this.pserv.getHome().toPromise().then(
  (data:home)=>{
    this.h=data
    console.log(this.h)
  }
)




  }
  f:File
  f2:File
  imagedata1:string
  imagedata2:string

  //upload image 1
 async uploadImage(event){
 this.f=event.target.files[0]

await this.convertto64(this.f).toPromise().then(
  (data:string)=>{
   this.imagedata1=data
  }
 
)
 
  }
// upload image 2 uploadimage2
async uploadimage2(event){
  this.f2=event.target.files[0]
 
 await this.convertto64(this.f2).toPromise().then(
   (data:string)=>{
    this.imagedata2=data
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

  modifierPresentation(f1:NgForm){

this.pserv.modifierPresentationHome({titre:f1.value.titre,image:this.imagedata1,description:f1.value.description}).subscribe(data =>{
  
})

this.acsrv.AjoutHistoriqUser({nom:this.m.nom,prenom:this.m.prenom,action:'m',description:'modifer page home : presentation ',date:this.dat}).subscribe()


this.toast.success(' ','presentation modifier  ')


  }


  modifierCredo(f:NgForm){
    
    this.pserv.modifierCredoHome({titre:f.value.titre,description:f.value.description}).subscribe(data =>{
      
    })

    this.acsrv.AjoutHistoriqUser({nom:this.m.nom,prenom:this.m.prenom,action:'m',description:'modifier page home : credo ',date:this.dat}).subscribe()


    this.toast.success(' ','credo modifier  ')


  }

  //modifier vision
  modifierVision(f:NgForm){
    this.pserv.modifierVisionHome({titre:f.value.titre,description:f.value.description}).subscribe()
    this.acsrv.AjoutHistoriqUser({nom:this.m.nom,prenom:this.m.prenom,action:'m',description:'modifier page home : Vision ',date:this.dat}).subscribe()
 
this.toast.success(' ','vision modifier  ')
}


  // modifier Mission
  modifierMission(f:NgForm){
    this.pserv.modifierMissionHome({titre:f.value.titre,description:f.value.description}).subscribe()
    this.acsrv.AjoutHistoriqUser({nom:this.m.nom,prenom:this.m.prenom,action:'m',description:'modifier page home : Mission ',date:this.dat}).subscribe()
  
this.toast.success(' ','mission modifier  ')

  
  }




}
