import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import {PageServiceService} from './../pages-service/page-service.service';
import { ToastrService } from 'ngx-toastr';
import{LoginserviceService} from './../loginservice/loginservice.service';
import{AcceeServiceService} from './../accee/accee-service.service';
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
interface page{
  home:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    historique:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    adhesion:[{titre:string,description:string},{titre:string,description:string},{titre:string,description:string}],
    presentation:[{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string}]
}
@Component({
  selector: 'app-modifier-adhesion',
  templateUrl: './modifier-adhesion.component.html',
  styleUrls: ['./modifier-adhesion.component.css']
})
export class ModifierAdhesionComponent implements OnInit {

t:page
m:PeriodicElement
  dat : string = new Date().toDateString();

  constructor(private psrv:PageServiceService,private logsrv:LoginserviceService,private acsrv:AcceeServiceService,private toast:ToastrService) { }

  ngOnInit(): void {
    var mail=localStorage.getItem('mail')
    var motpass=localStorage.getItem('motpass')
this.logsrv.getMembre(mail).toPromise().then(
  (data:PeriodicElement)=>{
this.m=data


  }
)




this.psrv.getPage().subscribe(data =>{
  data.forEach(element => {
    this.t=element
  });

  


})

  }
  modifierElm1(f:NgForm){
    this.psrv.ModifierAdhessionElm1(f.value).subscribe()
    this.acsrv.AjoutHistoriqUser({nom:this.m.nom,prenom:this.m.prenom,action:'m',description:'modifier Adhession elm1 ',date:this.dat}).subscribe()



    this.toast.success('page Adhesion ',' elment 1 et modifier')


      }

      modifierElm2(f2:NgForm){
        this.psrv.ModifierAdhessionElm2(f2.value).subscribe()
        console.log(f2.value)
        this.acsrv.AjoutHistoriqUser({nom:this.m.nom,prenom:this.m.prenom,action:'m',description:'modifier Adhession elm2 ',date:this.dat}).subscribe()
        this.toast.success('page Adhesion ',' elment 2 et modifier')


          }

          modifierElm3(f3:NgForm){
            this.psrv.ModifierAdhessionElm3(f3.value).subscribe()
            this.acsrv.AjoutHistoriqUser({nom:this.m.nom,prenom:this.m.prenom,action:'m',description:'modifier Adhession elm3 ',date:this.dat}).subscribe()
            this.toast.success('page Adhesion ',' elment 3 et modifier')


              }

}
