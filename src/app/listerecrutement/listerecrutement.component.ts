import { Component, OnInit } from '@angular/core';
import {PageServiceService} from './../pages-service/page-service.service';
import{NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {LoginserviceService} from './../loginservice/loginservice.service';



interface recrutement{
  _id:number,
  nom:string,
  prenom:string,
datenais:string,
    mail:string,
telephone:string,
 message:string,reponce:Boolean
}
@Component({
  selector: 'app-listerecrutement',
  templateUrl: './listerecrutement.component.html',
  styleUrls: ['./listerecrutement.component.css']
})
export class ListerecrutementComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'prenom', 'email', 'details','repandre','supprimer'];
  dataSource :recrutement[]
  p='recrutementdetail/'
  constructor(private pserv:PageServiceService,private toast:ToastrService
    ,private logserv:LoginserviceService
) { }


  email:string
 async ngOnInit() {
   
 var token=localStorage.getItem('token')
 

 let email=await this.logserv.isConnect({t:token})
console.log(email)
    this.pserv.getlisteRecrutement().toPromise().then(

      (data:recrutement[])=>{
        this.dataSource =data
      }

    )


  }
changerMail(val:string){
  this.email=val
}

repondre(f:NgForm){
console.log(f.value)
  this.pserv.repondreRecrutement(f.value).subscribe(
  )

this.toast.success('recrutement ',' repondre au recrutement avec succee')
}

supprimer(val){

this.pserv.supprimerRecrutement(val).subscribe()
this.toast.error('',' recrutement supprimer ')

}





}
