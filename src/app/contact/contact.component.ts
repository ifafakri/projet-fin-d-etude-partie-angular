import { Component, OnInit } from '@angular/core';
import {PageServiceService} from './../pages-service/page-service.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  m:Boolean=false
  n:Boolean=false
  s:Boolean=false
  e:Boolean=false
  constructor(private psrv:PageServiceService,private toast:ToastrService) { }

  ngOnInit() {
  }

  async AjoutContact(f:NgForm){

    if((f.value.nom).length==0){
      this.n=true
    }else{
      this.n=false
    }

    if((f.value.email).length==0){
      this.e=true
    }else{
      this.e=false
    }
    if((f.value.sujet).length==0){
      this.s=true
    }else{
      this.s=false
    }

    if((f.value.message).length==0){
      this.m=true
    }else{
      this.m=false
    }


if((f.value.nom).length!=0 && (f.value.email).length!=0 && (f.value.sujet).length!=0 && (f.value.message).length!=0 ){


  this.psrv.ajoutContact(f.value).subscribe( )
  this.toast.success('Contact evoyer ','contact')



}else{
  this.toast.error('Contact n est pas evoyer ','contact')
}


  }



}
