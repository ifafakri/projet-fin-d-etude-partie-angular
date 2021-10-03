import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import{PageServiceService} from './../pages-service/page-service.service';

interface payement{
  nom:string,
  prix:string,
  date:Date
}
@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {




pay:payement[]

  constructor(private ps:PageServiceService) { }

  ngOnInit(): void {
this.ps.getPayement().toPromise().then(
  (data:payement[])=>{
this.pay=data

  }
)



  }

  AjoutPay(f:NgForm){
this.ps.AjoutPayement(f.value).subscribe()

  }




}
