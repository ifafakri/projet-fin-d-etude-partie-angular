import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {PageServiceService} from './../pages-service/page-service.service';
import{NgForm} from '@angular/forms';
interface recrutement{
  _id:number,
  nom:string,
  prenom:string,
datenais:string,
    mail:string,
telephone:string,
 message:string,
 reponce:Boolean
}
@Component({
  selector: 'app-detail-recrutement',
  templateUrl: './detail-recrutement.component.html',
  styleUrls: ['./detail-recrutement.component.css']
})
export class DetailRecrutementComponent implements OnInit {
rec:recrutement
id:number

  constructor(private r:ActivatedRoute,private pserv:PageServiceService) { }

  ngOnInit(): void {

 this.id=   this.r.snapshot.params['id'];
    this.pserv.getRecrutement(this.id).toPromise().then(
(data:recrutement)=>{
  this.rec=data
}


    )


  }

}
