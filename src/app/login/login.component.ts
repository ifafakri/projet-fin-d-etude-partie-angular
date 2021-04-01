import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {LoginserviceService} from './../loginservice/loginservice.service';
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

  constructor(private serv2:LoginserviceService,private r:Router) { }

  message=false
  ngOnInit(): void {
     
      if( localStorage.getItem('logedIn') == 'true'){
        this.r.navigateByUrl('/dashoardAdmin')
      }
  }
  login(form:NgForm){
    this.d=form.value
console.log()

this.serv2.getlogin(this.d)
  
console.log()
  }

}
