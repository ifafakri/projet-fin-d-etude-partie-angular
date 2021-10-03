import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {Gallery} from 'angular-gallery';
declare var $: any;
import { ToastrService } from 'ngx-toastr';
import{NgForm} from '@angular/forms';

import {PageServiceService} from './../pages-service/page-service.service';
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
interface obj{
  path:string
}
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
  selector: 'app-activite-details',
  templateUrl: './activite-details.component.html',
  styleUrls: ['./activite-details.component.css']
})

export class ActiviteDetailsComponent implements OnInit {
id:number
j=0
nom=''
email=''
site=''
com:comantaire[]
  constructor(private r:ActivatedRoute,private pserv:PageServiceService,private gallery: Gallery,private toast:ToastrService) { }
  projet:projet2
  p2:projet2
im:obj[]
o:obj
tClass:string[]
 async ngOnInit() {

  this.nom=localStorage.getItem('nomcom')
  
    this.email=localStorage.getItem('emailcom')
  
    this.site=localStorage.getItem('site')
  
  




    this.id=this.r.snapshot.params['id']
await this.pserv.getProjet(this.id).toPromise().then(
  (data:projet2)=>{
    this.projet=data
  }
)

await $(document).ready(function(){
  $('.c').ready(function(){
    var i=$('.c').length
 
  var pos=0
for(var j=0;j<i;j++){
 pos++
 if(pos==1){
  $('.c').eq(pos-1).addClass("c1")
}
if(pos==2){
  $('.c').eq(pos-1).addClass("c2")
}
if(pos==3){
  $('.c').eq(pos-1).addClass("c3")
}
if(pos==4){
  $('.c').eq(pos-1).addClass("c4")
  pos=0
}

}
  


  })
        
        })


        this.pserv.getListCommantaire(this.id).toPromise().then(
          (data:comantaire[])=>{
      this.com=data
          }
        )


}

getdat(val:Date){

  let da=val.toLocaleString()
  return val
  
    }
 


    ajoutCommantaire(f:NgForm){

      console.log("la valeur de checkbox ="+f.value.enr)
          if(f.value.enr){
            localStorage.setItem('nomcom',f.value.nom)
            localStorage.setItem('emailcom',f.value.email)
            localStorage.setItem('site',f.value.siteweb)
      
          }
      
      
          if((f.value.comantaire.length)>0 && (f.value.nom.length)>0 && (f.value.email.length)>0 ){
      
      this.pserv.AjoutCommantaire({idAction:this.id,comantaire:f.value.comantaire,nom:f.value.nom,email:f.value.email,siteweb:f.value.siteweb}).subscribe()
      this.toast.success('commantaire ajouter','commantaire')
      
          }else{
            this.toast.error('il faut remplir les champs obligatoire','erreur')
      
          }
      
      
      
        }
      
      getDat(d:Date){

let ch=d.toLocaleString()
return ch.substr(0,10)

      }
      
         
}
