import { Component, OnInit } from '@angular/core';
import {PageServiceService} from './../pages-service/page-service.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {LoginserviceService} from './../loginservice/loginservice.service';



interface contact{
  id:number,
  nom:string,
email:string,
sujet:string,
message:string,
repond:Boolean
}

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css']
})
export class ListeContactComponent implements OnInit {
email:string
  constructor(private pserv:PageServiceService,private toast:ToastrService,private logserv:LoginserviceService
    ) { }

  c:contact[]
 
  displayedColumns: string[] = ['nom', 'email', 'sujet', 'message','repond','supprimer'];
 dataSource :contact[]

 async ngOnInit() {
   
 var token=localStorage.getItem('token')
 

 let email=await this.logserv.isConnect({t:token})
console.log(email)
 await  this.pserv.getContact().toPromise().then(

  (data:contact[]) =>{
this.dataSource=data
console.log(this.c)
  }

)



  }

  changerMail(val:string){
    this.email=val
  }
  
  repondre(f:NgForm){
  console.log(f.value)
    this.pserv.repondContact(f.value).subscribe()
  
  
  }



  supprimer(val){

this.pserv.supprimerContact(val).subscribe()


this.toast.error(' ',' contact supprimer')

  }




}
