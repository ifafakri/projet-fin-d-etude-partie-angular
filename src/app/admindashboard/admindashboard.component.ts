import { Component, ViewChild,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatTreeModule} from '@angular/material/tree';

import { MatMenuTrigger } from '@angular/material/menu';
import {LoginserviceService} from './../loginservice/loginservice.service';
import{AcceeServiceService} from './../accee/accee-service.service';
import{Router} from '@angular/router';

import{ServiceAdminService} from './../serviceAdmin/service-admin.service'

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

interface poste {
  nomPoste:string
}
export interface PeriodicElement  {
  _id:number
  nom: string;

  prenom: string;

  dnais:string;
  numtel:string;
  mail:string;
  poste:string;
  dateposte:string;
  motpass:string;
image:string


}
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})

export class AdmindashboardComponent implements OnInit{
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
someMethod() {
    this.trigger.openMenu();
  }

  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    
    m:PeriodicElement
    acce:role
  constructor(private breakpointObserver: BreakpointObserver,private logserv:LoginserviceService,private acserv:AcceeServiceService,private r:Router,private sa:ServiceAdminService) {}

mbr:number
formation:number 
projet:number

async ngOnInit() {


 await  this.sa.ListeMembre().toPromise().then(
    (data)=>{
      this.mbr=data.length
    }
  )



  var token=localStorage.getItem('token')
 

  let email=await this.logserv.isConnect({t:token})
console.log(email)




 await this.logserv.getMembre(email).toPromise().then(
   (data:PeriodicElement)=>{
     this.m=data
   }
 )
 console.log(this.m.poste)


 await this.acserv.getAcceePoste(this.m.poste).toPromise().then(
(data:role)=>{
this.acce=data


}



 )


}

  disconnect(){
    localStorage.setItem('token','')
    localStorage.setItem('mail','')
    localStorage.setItem('motpass','')
  }
}
