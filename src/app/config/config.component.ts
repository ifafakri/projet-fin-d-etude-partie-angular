import { Component, OnInit } from '@angular/core';
import {PageServiceService} from './../pages-service/page-service.service';
import{NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

interface config{

  email:string,
pass:string,
recrutement:{dateD:Date,dateF:Date}

}
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

c:config
d:Date
dd:Date
df:Date
y:string
m:string
day:string
ch:string
ch2:string
test:string
  constructor(private pserv:PageServiceService,private toast:ToastrService) { }

 async ngOnInit() {
this.d=new Date()
 await this.pserv.getConfig().toPromise().then(

  (data:config)=>{
    this.c=data
    console.log(this.c)
  }
)

this.ch=this.c.recrutement.dateD.toLocaleString()

this.y=this.ch.substr(0,4)
this.m=this.ch.substr(5,2)
this.day=this.ch.substr(8,2)
this.dd=new Date(Number(this.y),Number(this.m)-1,Number(this.day))

if(this.d<= this.dd){
this.test='recrutement possible'

}else{
  this.test='recrutement n est pas possible au ce moment'

}




  }

//pour modifier le compte gmail du site

modifierConfigMail(f:NgForm){

if((f.value.mail).length==0 ){
  this.toast.error('configuration gmail de site echec','il faux donner l email et le mot depass')
}else{
  this.pserv.configEmail(f.value).subscribe()

  this.toast.success('configuration du compte gmail et reussie','compte est modifier')


}




}


// modifier le date de recrutement

modifierDatRect(f2:NgForm){

  
this.pserv.configDatRecrutement(f2.value).subscribe()


    this.toast.success(' le date de recrutement et modifier avec succee',' ')
  


}









}
