import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import{PageServiceService} from './../pages-service/page-service.service';
import { ToastrService } from 'ngx-toastr';
import {LoginserviceService} from './../loginservice/loginservice.service';




@Component({
  selector: 'app-modifpresentation2',
  templateUrl: './modifpresentation2.component.html',
  styleUrls: ['./modifpresentation2.component.css']
})
export class Modifpresentation2Component implements OnInit {

  constructor(private psrv:PageServiceService,
    private toast:ToastrService ,private logserv:LoginserviceService


    
    ) { }

 async ngOnInit() {
   
 var token=localStorage.getItem('token')
 

 let email=await this.logserv.isConnect({t:token})
console.log(email)

  }



  modifierPresentation2(f:NgForm){

this.psrv.modifierPresentation2(f.value).subscribe()


this.toast.success('presentation modifier ',' presentation')
  }



}
