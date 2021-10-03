
import { Component, OnInit } from '@angular/core';
import {Gallery} from 'angular-gallery';
import{ActivatedRoute} from '@angular/router';
import{NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ThemePalette} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatChipInputEvent} from '@angular/material/chips';

declare var $: any;
import {PageServiceService} from './../pages-service/page-service.service';
interface comantaire{
  id:number,
  idAction:string,
   comantaire:string,
   nom:string,
email:string
,
siteweb:string

}

export interface Fruit {
  name: string;
}
interface projet2{
  id:number
  titre:string,
  text:string,
  image:string[]
  ,
  dat:Date,liens:string,
formateur:string,inscrir:Boolean
}
interface obj{
  path:string
}
@Component({
  selector: 'app-formationdetails',
  templateUrl: './formationdetails.component.html',
  styleUrls: ['./formationdetails.component.css']
})
export class FormationdetailsComponent implements OnInit {

  id:number
  j=0
nom=''
email=''
visible = true;
selectable = true;
removable = true;
addOnBlur = true;
site=''

    constructor(private r:ActivatedRoute,private pserv:PageServiceService,private gallery: Gallery,private toast:ToastrService

      ) { }
    projet:projet2
    p2:projet2
  im:obj[]
  o:obj
  tClass:string[]
  com:comantaire[]
   async ngOnInit() {
  
    this.nom=localStorage.getItem('nomcom')
  
    this.email=localStorage.getItem('emailcom')
  
    this.site=localStorage.getItem('site')
  
  
  
      this.id=this.r.snapshot.params['id']
  await this.pserv.getformation(this.id).toPromise().then(
    (data:projet2)=>{
      this.projet=data
      
    }
  )
  console.log(this.projet)
  await $(document).ready(function(){
    
  
  
          
          })
  
  this.pserv.getListCommantaire(this.id).toPromise().then(
    (data:comantaire[])=>{
this.com=data
    }
  )


  
  
  
  }
  
    

  getdat(val:Date){

let da=val.toLocaleString()
return da.substr(0,9)

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


  async AjoutInscrir(f1:NgForm){
    console.log(f1.value)

    let comp=''
    if(f1.value.c1){
      comp=comp+ "  Graphique "
    }
    if(f1.value.c2){
      comp=comp+ " Informatique "
    }
    if(f1.value.c3){
      comp=comp+ " Photographie "
    }
    if(f1.value.c4){
      comp=comp+ " Montage vidéo  "
    }


    let prf=''
    if(f1.value.profission!='autre'){
      prf=f1.value.profission
    }else{
      prf=f1.value.p5
    }



if((f1.value.nom.length)==0 ||

  (f1.value.adresemail.length)==0 ||

 ( f1.value.lienfb.length)==0 ||

 ( f1.value.domaine.length)==0 ||
( f1.value.dat.length)==0||
(f1.value.telepone)>99999999 || (f1.value.telepone)<11111111
||
  (f1.value.parrain.length)==0 ||
  (f1.value.actif.length)==0 ||
  (f1.value.association.length)==0 ||
  (f1.value.deplacement.length)==0 ||
  (comp.length)==0 ||
  (prf.length)==0 ||
  (f1.value.objectif.length)==0){
    this.toast.error('','toutes les champs sont obligatoires')
  }else{


    this.pserv.inscrirFormation({

      nom:f1.value.nom,
      dat:f1.value.dat,
adresemail:f1.value.adresemail,

 telepone:f1.value.telepone,
   lienfb:f1.value.lienfb,
profission:prf,
  domaine:f1.value.domaine,
competance:comp,
   idform:this.id,
  parrain:f1.value.parrain,
    actif:f1.value.actif,
association:f1.value.association,
deplacement:f1.value.deplacement,
 objectif:f1.value.objectif


}).subscribe()


    this.toast.success('','inscription reussi')
  }







  }

   

}
