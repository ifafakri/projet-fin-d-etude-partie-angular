import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import {PageServiceService} from './../pages-service/page-service.service';
interface partenair{
  _id:number,
  image:string
}
@Component({
  selector: 'app-modif-partenair',
  templateUrl: './modif-partenair.component.html',
  styleUrls: ['./modif-partenair.component.css']
})
export class ModifPartenairComponent implements OnInit {

  constructor(private pserv:PageServiceService) { }

  imageData:string
  f:File
listePartenaire:partenair[]


 async ngOnInit(){
   await this.pserv.listepartenair().toPromise().then(
      (data:partenair[]) =>{
        this.listePartenaire=data
      }
    )

   console.log(this.listePartenaire)
  }


 async uploadImage(event){
this.f=event.target.files[0]
await this.convertto64(this.f).toPromise().then(
  (data:string)=>{
this.imageData=data
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
  
  ajouterPartenaire(f:NgForm){

this.pserv.ajouterPartenair({image:this.imageData}).subscribe()
    
console.log('ok !')

  }


  //supprimer une image
  supprimerImage(val){
 
    this.pserv.supprimerPartenair(val).subscribe()
  }
}
