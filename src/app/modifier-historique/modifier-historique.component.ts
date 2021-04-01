import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import{PageServiceService} from './../pages-service/page-service.service';
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
  
@Component({
  selector: 'app-modifier-historique',
  templateUrl: './modifier-historique.component.html',
  styleUrls: ['./modifier-historique.component.css']
})
export class ModifierHistoriqueComponent implements OnInit {
  obj1:obj
  obj2:obj
  t:page
  f:File
  f2:File
  imagedata1: string;
  imagedata2: string;
  constructor(private pserv:PageServiceService) { }

  ngOnInit(): void {
    this.pserv.getPage().subscribe(data =>{
      data.forEach(element => {
        this.t=element
      });
        
    })
}
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




modifierpartie1(f:NgForm){
  this.obj1={description:f.value.description,image:this.imagedata1}
  this.pserv.modifierHistoriquePartie1(this.obj1).subscribe()
  
  
    }
    modifierpartie2(f:NgForm){
      this.obj2={description:f.value.description,image:this.imagedata2}
      this.pserv.modifierHistoriquePartie2(this.obj2).subscribe()
      console.log(this.imagedata2)
      
        }



}