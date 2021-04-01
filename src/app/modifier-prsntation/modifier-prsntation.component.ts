import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
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
  selector: 'app-modifier-prsntation',
  templateUrl: './modifier-prsntation.component.html',
  styleUrls: ['./modifier-prsntation.component.css']
})
export class ModifierPrsntationComponent implements OnInit {
  imagedata1: string;
f:File
obj1:obj

t:page
  constructor(private pserv:PageServiceService) { }

  ngOnInit(): void {
    this.pserv.getPage().subscribe(data =>{

      data.forEach(element => {
      
          this.t=element
      });

    })
  }

  async uploadImage(event){

    this.f=event.target.files[0]
    await this.convertto64(this.f).toPromise().then(
      (data:string)=>{
       this.imagedata1=data
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
  
  modifierpresentationGereral(f:NgForm){
this.obj1={image:this.imagedata1,description:f.value.description}


this.pserv.modifierPresentationGeneral(this.obj1).subscribe()
  }

//modifier mission
modifierMission(f2:NgForm){
this.pserv.modifierPresentationMission(f2.value).subscribe()



}

//modifier vision
modifierVision(f2:NgForm){
  this.pserv.modifierPresentationVision(f2.value).subscribe()

}

//modifier credo
modifierCredo(f2:NgForm){
this.pserv.modifierPresentationCredo(f2.value).subscribe()
}






}
