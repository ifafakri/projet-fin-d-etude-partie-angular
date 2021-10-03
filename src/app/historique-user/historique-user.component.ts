import { Component, OnInit } from '@angular/core';
import{AcceeServiceService} from './../accee/accee-service.service';

import {LoginserviceService} from './../loginservice/loginservice.service';

interface hist2 {
  id:number
  nom:string,
  prenom:string,
  action:string,
  description:string,
  date:string
  
  }
@Component({
  selector: 'app-historique-user',
  templateUrl: './historique-user.component.html',
  styleUrls: ['./historique-user.component.css']
})
export class HistoriqueUserComponent implements OnInit {

  dataSource:hist2[]
  
  displayedColumns: string[] = ['membre', 'action', 'description', 'date','supprimer'];
  constructor(private ac:AcceeServiceService
    ,private logserv:LoginserviceService
    ) { }

  async ngOnInit() {

    var token=localStorage.getItem('token')
 

    let email=await this.logserv.isConnect({t:token})
  console.log(email)
    this.ac.GetHistoriqUser().toPromise().then(
      (data:hist2[])=>{
        this.dataSource=data
      }
    )


  }

  supprimerHistorique(val){

this.ac.SuppressionHistoriqUser(val).subscribe()

  }



}
