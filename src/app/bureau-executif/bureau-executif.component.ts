import { Component, OnInit } from '@angular/core';
import{ServiceAdminService} from './../serviceAdmin/service-admin.service';
import{LoginserviceService} from './../loginservice/loginservice.service';
export interface PeriodicElement {
  _id:number
  nom: string,

  prenom: string,

  dnais:string,
  numtel:string,
  mail:string,
  poste:string,
  dateposte:string,
  motpass:string,
image:string



}
@Component({
  selector: 'app-bureau-executif',
  templateUrl: './bureau-executif.component.html',
  styleUrls: ['./bureau-executif.component.css']
})
export class BureauExecutifComponent implements OnInit {

 b:PeriodicElement[]
posteu='precedent'


  constructor(private pserv:ServiceAdminService,private logserv:LoginserviceService) { }

async  ngOnInit() {

  var token=localStorage.getItem('token')
 

  let email=await this.logserv.isConnect({t:token})



 await this.pserv.ListeMembre().toPromise().then(
(data:PeriodicElement[])=>{
this.b=data
console.log('longueur', this.b.length)
}

)



  }

testImage(val){
if(val==''){
  return 'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'
}else{
  return val
}


}




}
