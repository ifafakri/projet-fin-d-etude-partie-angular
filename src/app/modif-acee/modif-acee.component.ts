import { Component, OnInit } from '@angular/core';
import{AcceeServiceService} from './../accee/accee-service.service';
import{ActivatedRoute} from '@angular/router'
import{NgForm} from '@angular/forms';
import {LoginserviceService} from './../loginservice/loginservice.service';


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
@Component({
  selector: 'app-modif-acee',
  templateUrl: './modif-acee.component.html',
  styleUrls: ['./modif-acee.component.css']
})
export class ModifAceeComponent implements OnInit {

  poste:string
  a:role
  constructor(private acserv:AcceeServiceService,private Ar:ActivatedRoute,private logserv:LoginserviceService

    ) { }

 async ngOnInit() {
   
 var token=localStorage.getItem('token')
 

 let email=await this.logserv.isConnect({t:token})
console.log(email)
 this.poste=   this.Ar.snapshot.params['poste']
 console.log(this.poste)
this.acserv.rechrchePosteInAcceeT(this.poste).subscribe(
  data =>{
    if(data===false){
      this.acserv.initialiser({poste:this.poste}).subscribe()
    }

  }
)

this.acserv.getAcceePoste(this.poste).toPromise().then(

  (data:role)=>{
    this.a=data
    console.log(this.a)
  }

)



  }

  Aformation(f:NgForm){
this.acserv.acceFormation({ajout:this.testChek(f.value.ajout),modufication:this.testChek(f.value.modufication),suppression:this.testChek(f.value.suppression),poste:this.poste}).subscribe()
console.log(this.testChek(f.value.ajout)) 
console.log(this.testChek(f.value.modufication)) 
console.log(this.testChek(f.value.suppression)) 

}

  Aprojet(f:NgForm){
this.acserv.AcceProjet({ajout:this.testChek(f.value.ajout),modufication:this.testChek(f.value.modufication),suppression:this.testChek(f.value.suppression),poste:this.poste}).subscribe()
 console.log(f.value) 

}
  AMembre(f:NgForm){
this.acserv.AcceMemmbre({ajout:this.testChek(f.value.ajout),modufication:this.testChek(f.value.modufication),suppression:this.testChek(f.value.suppression),poste:this.poste}).subscribe()
  }


Apage(f:NgForm){
this.acserv.AccePage({modufication:this.testChek(f.value.modufication),poste:this.poste}).subscribe()
}

Arecrutement(f:NgForm){
this.acserv.AcceeRecrutement({modufication:this.testChek(f.value.modufication),poste:this.poste}).subscribe()
}

AHistorique(f:NgForm){
this.acserv.AcceeHistorique({modufication:this.testChek(f.value.modufication),poste:this.poste}).subscribe()
}

Acontact(f:NgForm){
this.acserv.AcceContact({modufication:this.testChek(f.value.modufication),poste:this.poste}).subscribe()
}


testChek(val){

  if(val===true){
    return  "true";
  }else{
    return "false";
  }


}






}
