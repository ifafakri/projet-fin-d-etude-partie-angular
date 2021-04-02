import { Component,OnInit,Input } from '@angular/core';
import{LoginserviceService} from './loginservice/loginservice.service';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import{NgForm} from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title=''
logedIn = false
@Input() v:boolean
@Input()  v2:boolean
constructor(private servAdmin:LoginserviceService,public router:Router){
  this.logedIn = localStorage.getItem('logedIn') =="true" ;
setInterval(()=>{
this.v= this.servAdmin.ShowAdminDashboard
  this.v2=this.servAdmin.Showhome
},1000)

}

  ngOnInit(): void {
   
     
    AOS.init()



    
  }
}
