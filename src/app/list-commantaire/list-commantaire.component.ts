import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {LoginserviceService} from './../loginservice/loginservice.service';



import{PageServiceService} from './../pages-service/page-service.service'
interface comantaire{
  id:number,
  idAction:string,
   comantaire:string,
   nom:string,
email:string
,
siteweb:string
}

@Component({
  selector: 'app-list-commantaire',
  templateUrl: './list-commantaire.component.html',
  styleUrls: ['./list-commantaire.component.css']
})
export class ListCommantaireComponent implements OnInit {

  idAct:number
  com:comantaire[]

  constructor(private r:ActivatedRoute,private psrv:PageServiceService,
    private toast:ToastrService,private logserv:LoginserviceService
    ) { }

  async ngOnInit() {
    var token=localStorage.getItem('token')
 

    let email=await this.logserv.isConnect({t:token})
  console.log(email)
  
  
await this.psrv.getListCommantaire(this.r.snapshot.params['id']).toPromise().then(
(data:comantaire[])=>{
  this.com=data
}

)


  }

  supprimer(val){

this.psrv.supprimerCommant(val).subscribe()

this.toast.error(' ',' commantair supprimer')





  }






}
