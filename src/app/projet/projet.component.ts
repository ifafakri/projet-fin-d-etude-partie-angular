import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import {PageServiceService} from './../pages-service/page-service.service';
import{AcceeServiceService} from './../accee/accee-service.service';
import {ServiceAdminService} from './../serviceAdmin/service-admin.service';
import {LoginserviceService} from './../loginservice/loginservice.service';

interface role {
  poste:string,
  formation:{ajout:Boolean,suppression:Boolean,modufication:Boolean},
  membre:{ajout:Boolean,suppression:Boolean,modufication:Boolean},
  projet:{ajout:Boolean,suppression:Boolean,modufication:Boolean},
  page:{modufication:Boolean},
  recrutement:{affichage:Boolean},
  historique:{affichage:Boolean},
  contact:{affichage:Boolean}


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



interface projet{
  titre:string,
  text:string,
  image:string[]
}
interface projet2{
  id:number
  titre:string,
  text:string,
  image:string[],
  dat?:Date,
formateur?:string,
inscrir?:Boolean
,liens?:string
}
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  n:number=0
  dataSource :projet2[]
  listeprojet2:projet2[]
  f:FileList
  f2=FileList
  id:number
  listImage:string[]=[]
  listImage2:string[]=[]
  i=0
  j=0
  displayedColumns: string[] = ['titre', 'text', 'images', 'modifier','supprimer'];
  constructor(private pserv:PageServiceService,private acserv:AcceeServiceService,private logserv:LoginserviceService
    ,private adserv:ServiceAdminService) { }
r:role
m:PeriodicElement
 async ngOnInit() {
   await this.pserv.getListeProjet().toPromise().then(
      (data:projet2[])=>{
this.dataSource =data
      }
    )
//get la poste du membre

var token=localStorage.getItem('token')
 

let email=await this.logserv.isConnect({t:token})
console.log(email)

await this.adserv.getMembre(email).toPromise().then(
  (data:PeriodicElement)=>{
this.m=data

  }
)
await this.acserv.getAcceePoste(this.m.poste).toPromise().then(
  (data:role)=>{
this.r=data

  }
)

  }


  async uploadImage(event)
  {
  this.n=event.target.files.length
  this.f2=event.target.files
  for(this.j=0;this.j<this.f2.length;this.j++){
  await this.convertto64(this.f2[this.j]).toPromise().then(
    (data:string)=>{
      this.listImage.push(data)
    }
  )
  
  
  }
  console.log(this.listImage)
  
  }
//upload image 2

async uploadImage2(event)
{
this.n=event.target.files.length
this.f2=event.target.files
for(this.i=0;this.i<this.f2.length;this.i++){
await this.convertto64(this.f2[this.i]).toPromise().then(
  (data:string)=>{
    this.listImage2.push(data)
  }
)


}
console.log(this.listImage)

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
ajoutProjet(f:NgForm){

this.pserv.AjoutProjet({titre:f.value.titre,text:f.value.text,image:this.listImage,dat:f.value.dat,formateur:f.value.formateur}).subscribe()




}
supprimerProjet(id){console.log(id)
  this.pserv.supprimerProjet(id).subscribe()
}

changer(id){
this.id=id

}

modificationProjet(f:NgForm){
  console.log(this.listImage2)
this.pserv.modifierProjet({titre:f.value.titre,text:f.value.text,image:this.listImage2,id:f.value.id,dat:f.value.dat,formateur:f.value.formateur}).subscribe()

}



}
