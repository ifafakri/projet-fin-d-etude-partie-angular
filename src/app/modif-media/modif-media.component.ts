import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';

import { Observable, Subscriber } from 'rxjs';
import{PageServiceService} from './../pages-service/page-service.service';
import{LoginserviceService} from './../loginservice/loginservice.service';
import{AcceeServiceService} from './../accee/accee-service.service';
interface media{

  image:string,
  video:string,
  description:string,
  titre:string
}
interface media2{
  id:number,
  image:string,
  video:string,
  description:string,
  titre:string
}
interface obd{
  id:number
}
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


@Component({
  selector: 'app-modif-media',
  templateUrl: './modif-media.component.html',
  styleUrls: ['./modif-media.component.css']
})
export class ModifMediaComponent implements OnInit {


  obj:media
  f:File
  f2:File
  listeMedia:media2[]
  imageData:string
  imageData2:string
  modifId:number
  o:obd
  m:PeriodicElement
  dat : string = new Date().toDateString();

  constructor(private pserv:PageServiceService,private logsrv:LoginserviceService,private acsrv:AcceeServiceService) { }

  async ngOnInit() {
    this.pserv.GetMedia().subscribe(data =>{
      this.listeMedia=data
      
    })

    var token=localStorage.getItem('token')
 

    let email=await this.logsrv.isConnect({t:token})
  console.log(email)
  
    this.logsrv.getMembre(email).toPromise().then(
      (data:PeriodicElement)=>{
    this.m=data
    
    
      }
    )

  }
  async uploadImage(event){
    this.f=event.target.files[0]
 await this.convertto64(this.f).toPromise().then(
   (data:string)=>
   {
     this.imageData=data
   }
 )
   }

   async uploadImage2(event){
    this.f2=event.target.files[0]
 await this.convertto64(this.f2).toPromise().then(
   (data:string)=>
   {
     this.imageData2=data
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

// ajouter media 
AjouterMedia(f1:NgForm)
{
  console.log(this.imageData)
console.log(f1.value )
this.obj={image:this.imageData,video:f1.value.video,titre:f1.value.titre,description:f1.value.description}
this.pserv.ajoutMedia(this.obj).subscribe()

this.acsrv.AjoutHistoriqUser({nom:this.m.nom,prenom:this.m.prenom,action:'a',description:'ajout media ('+f1.value.titre+')',date:this.dat}).subscribe()

}

changeId(val){
this.modifId=val
}

// modifier media 

modifierMedia(f:NgForm){
console.log(f.value)
this.pserv.ModifierMedia({id:f.value.id,titre:f.value.titre,description:f.value.description,image:this.imageData2,video:f.value.video}).subscribe()
this.acsrv.AjoutHistoriqUser({nom:this.m.nom,prenom:this.m.prenom,action:'m',description:'modifier media ('+f.value.titre+')',date:this.dat}).subscribe()


}

supprimerMedia(val,titre){


this.pserv.suppressionMedia(val).subscribe()
this.acsrv.AjoutHistoriqUser({nom:this.m.nom,prenom:this.m.prenom,action:'s',description:'supprimer  media titre: ('+titre+')',date:this.dat}).subscribe()

}

}
