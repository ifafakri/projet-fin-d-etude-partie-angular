import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


import{NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {LoginserviceService} from './../loginservice/loginservice.service';
import{AcceeServiceService} from './../accee/accee-service.service'
interface rep{
  e:Boolean
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
d:PeriodicElement
test:PeriodicElement

  constructor(private serv2:LoginserviceService,private r:Router,private acs:AcceeServiceService,private toast:ToastrService,private logserv:LoginserviceService
    ) { }
m:number
  message=false
  ngOnInit(): void {
   
     
  }
 async login(form:NgForm){
    // form.value.motpass
    this.d=form.value
console.log()

await this.serv2.getlogin({mail:form.value.mail,pass:form.value.motpass})
  
console.log()
  }




 async getMotdepass(f:NgForm){
let e:Boolean


await this.acs.getMotPass(f.value.mail).toPromise().then(
  (data:rep)=>{

    e=data.e

  }

)
if(e){


  this.toast.success(' ','mot de passe envoyer au adresse mail')
}else{
  this.toast.error(' ','Aucun compte avec ce mail')
}





  }




}
