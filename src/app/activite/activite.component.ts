import { Component, OnInit } from '@angular/core';
import {PageServiceService} from './../pages-service/page-service.service';
import {Router} from '@angular/router';
interface projet2{
  id:number
  titre:string,
  text:string,
  image:string[],
  dat?:Date,
formateur?:string,
inscrir?:Boolean
,liens?:string
}
@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {

  projet:projet2[]
  formation:projet2[]
  url='/formationdetails/'
  url2='/projetDetails/'

  constructor(private pserv:PageServiceService,private r:Router) { }

 async ngOnInit() {
   await this.pserv.getListeProjet().toPromise().then(
      (data:projet2[])=>{
this.projet=data
      }
    )
this.pserv.getListeformation().toPromise().then(
  (data:projet2[])=>{
    this.formation=data
  }
)

  }

minimiser(ch){
 var ch1=""
var x=0
if(ch.length<=650){
x=ch.length
}else{
  x=650

}

for(var i=0;i<x;i++){
ch1=ch1+ch[i]
}

return ch1+'....'

}

afficheProjet(id){
  var  ch='/projetDetails/'+id
 this.r.navigateByUrl(ch)
 }
 afficheFormation(id){
  var  ch='/formation/'+id
 this.r.navigateByUrl(ch)
 }
  






}
