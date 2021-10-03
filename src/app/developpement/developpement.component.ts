import { Component, OnInit } from '@angular/core';
import{PageServiceService} from './../pages-service/page-service.service'
import{Router} from '@angular/router';
declare var $: any;
interface developpement{
  id:number,
  titre:string,
icon:string,
text:string

}
interface projet2{
  id:number
  titre:string,
  text:string,
  image:string[]
}
@Component({
  selector: 'app-developpement',
  templateUrl: './developpement.component.html',
  styleUrls: ['./developpement.component.css']
})
export class DeveloppementComponent implements OnInit {
  url='/formationdetails/'

  dev:developpement[]
  formation:projet2[]
  constructor(private psrv:PageServiceService,private r:Router) { }

async  ngOnInit() {
await this.psrv.getListDev().toPromise().then(
  (data:developpement[])=>{

    this.dev=data


  }
)
this.psrv.getListeformation().toPromise().then(
  (data:projet2[])=>{
    this.formation=data
  }
)

await $(document).ready(function(){


  $('.billon:odd').css('background','#F37527')
  $('.billon:even').css('background','#1F97D4')



})



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

   afficheFormation(id){
    var  ch='/formation/'+id
   this.r.navigateByUrl(ch)
   }
    



}
