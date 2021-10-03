import { Component, OnInit } from '@angular/core';
import {PageServiceService} from './../pages-service/page-service.service';
import{NgForm} from '@angular/forms';

interface config{

  email:string,
pass:string,
recrutement:{dateD:Date,dateF:Date}

}


@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.css']
})
export class RecrutementComponent implements OnInit {

  constructor(private pserv:PageServiceService) { }
alert=false

conf:config

  ngOnInit(): void {
this.pserv.getConfig().toPromise().then(
  (data:config)=>{
    this.conf=data
  }
)





  }
ajouterRecrutement(f:NgForm){
  this.pserv.creationRecrutement(f.value).subscribe()
console.log(f.value)
  this.alert=true


}




}
