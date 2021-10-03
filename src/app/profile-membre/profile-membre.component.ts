import { Component, OnInit } from '@angular/core';
import{ServiceAdminService} from './../serviceAdmin/service-admin.service';
import{NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscriber } from 'rxjs';
import {LoginserviceService} from './../loginservice/loginservice.service';


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

interface profile{
  about:string,
youtube:string,
twiter:string,
linkedin:string,
facebook:string,
gmail:string,
mail:string,
affiche:Boolean
}
@Component({
  selector: 'app-profile-membre',
  templateUrl: './profile-membre.component.html',
  styleUrls: ['./profile-membre.component.css']
})
export class ProfileMembreComponent implements OnInit {

c=true
d=new Date()
m:PeriodicElement
mu:PeriodicElement
pr:profile
image:string=''
f:File
o:PeriodicElement
email:string
  constructor(private sa:ServiceAdminService,private toast:ToastrService
    ,private logserv:LoginserviceService
    
    ) { }

 async ngOnInit() {


  
 var token=localStorage.getItem('token')
 

 let email=await this.logserv.isConnect({t:token})
 this.email=email
console.log(email)


 await   this.sa.getMembre(email).toPromise().then(
(data:PeriodicElement)=>{

  this.m=data
}
,(error)=>{
  console.log('erreur')
}

    )


 


  }


// upload image
async upload(event){
this.f=event.target.files[0]
await this.convertto64(this.f).toPromise().then(
  (data:string)=>{
this.image=data

  }
)

}


convertto64(file:File){
  const observable=new Observable((subscriber:Subscriber<any>)=>{
this.readFile(file,subscriber)
  })
return observable;


}

readFile(file:File,subsciber:Subscriber<any>){
  const fileRader=new FileReader()
  fileRader.readAsDataURL(file)
  fileRader.onload=()=>{
    subsciber.next(fileRader.result)
    subsciber.complete()
  }
  fileRader.onerror=(error)=>{
    subsciber.error(error)
    subsciber.complete()
  }

}









  menu(val){
if(val==='c'){
  this.c=true
  

}


  }

//modifier profile

 e1:Boolean=false
 e2:Boolean=false
 async  modifProfile(f:NgForm){

if((f.value.mail).length===0){

  this.toast.error('erreur ',' il ya des champs vide')
}else{
 this.mu=f.value
 this.mu.image=this.image
await this.sa.modifProfile(this.mu).toPromise().then(

  (complete)=>{
    this.e1=false
  },

  (error)=>{
    if(error.length>0){
      this.e1=true
    }
  }

 )
 if(this.e1==true){
  this.toast.error('echec ',' echec de modifier le profile')
 }else{
  this.toast.success(' ','profile modifier ')
 }


}
  



}

//modif compte

async modifCompt(f2:NgForm){
  console.log(f2.value)
console.log(f2.value.motpass)

localStorage.setItem("motpass",f2.value.motpass)


if((f2.value.mail).length==0 || (f2.value.motpass).length<8 || ((f2.value.numtel)<11111111 && (f2.value.numtel)>99999999 )  ){
 await this.toast.error(' il faux remplir tout les champs et mot de passe > 8 caractaire et numero telephone =8','echec')

}else{

this.sa.modifCompt({  nom: f2.value.nom,

  prenom: f2.value.prenom,

  dnais:f2.value.dnais,
  numtel:f2.value.numtel,
  mail:f2.value.mail,

  motpass:f2.value.motpass,
image:this.image}).toPromise().then(
(complete)=>{

},


(error)=>{
if(error.length>0){
  this.e2=true
}else{
  this.e2=false
}




}
)


if(this.e2){
  this.toast.error('echec',' echec de modifier les informations du compte')


}else{

  this.toast.success('','les informations du compte est modifier')
}




}



}

testim(){
let x:string
     if(this.image.length===0){
x='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEWQyvn///8VZcDh9f4ZdtKLyPnM5v3G4/yUzvuYzvkTdNFIkd5GhtHf9P7O6vwOYr+t2fr3+/4AXr0LcdAxgdZNitJXk9eJw/QhasJvqeR5te5Nk96CvfJpo+F1rufz+f4/fswAWrtBi9pfn+RBgM00gtcxdMd/uvEpfNUnbsRVmeEWa8Zpp+cQIim7AAAEgklEQVR4nO3Z0VraQBAF4DSGdg22aRMVRGgVRbD1/Z+vCRpMQmBnwyYzw3fONdT+7oycDcGXc0/A/R/oPRDqD4T6A6H+QKg/EOoPhPpDE34dBUPk8te5C0d9EEUJc+KfMxf2cYrChMHI+CZKE/ofVHFC70Qpwsufux/heRfFCC8qRK+7KEb4vUr0OaiChBf9DKokYT9EUcJeBlWWsA+iMGEPgypN6P9DQ5zQ+6DKE/omChR63kWJQr+7KFLodVBlCn0OqlChx0GVKvQ3qGKF3ohyhb52UbDQ0y5KFvoZVNFCL4MqW+iDKFzogShdePouiheefIryhad+aCgQnjioGoSnEVUIT9pFHcJTdlGJ8IRB1SLsPqhqhJ2JeoRdiYqEHXdRk7DbKaoSdvrQ0CXsMqjKhB2I2oRV4rfzFH4Sz1a4I2oTkoE7ojbhD4dcahQGI4cEKoXugRBCCPkDIYQQ8gdCCCHkD4QQQsgfCCGEkD8QQgghfyCEEEL+QAghhPyBEEII+QMhhBDSY9xebYLJyFDeI0f44PJiM1tGUXT9Rvi9SBGam8dbh1O8z+I4iqNsM7e+SYjQ/E7DdEYlmnEWvSeOJkqEk2kYJlMq8K4E5sSl7dciQ2iekzAM0yvaIZpNvBNG2dryJhFCs0jDIukdiTivAKPsSYHQTJLwPVPrVhUvn2UVYXyvQfhQCpNnwiHqE5rbNCyTLgjESW1K38QLzSwJP5PaP+ACs6oQ47nl1fzC4LUqTF4IwsqYZrYh5ReamyowJxKqjXnKPk4x3lh/JLfQ3KVhPclvCjHa1rZsaf+J3MKizDSEr4S3mfnT6np1T+l5zML3MtMgkqpNcXNScHsqy0w9xGpDDKvQzNuAeVqqjVkvFQqDl/0Z3c7pQ8shbqwNVJ7Q3LYD26qNGef3XfIFUopwdmBGw/1qY94y0nVXmPD10BEW1aYOXGe0664oYbPMNIj1ahPFtMugJGHxZOZYqk9tzLKs2hmh8EgR7peZxiFOd/9YXkN3Nwn3VeQSmqtjM7olltXGzKqXpZXrITIJ28tMY04/qs0oqt14/zoSmYQTOzA/xe1E1u67BdGx0/EIzYEy0xAW1aayhOUqEh4DcAsPl5nGnC5MbQnLVXQB8gjXNGBRbSbRntBxFVmER8pMY05flvtAx1VkEB4vM/X8awO6reLwQluZqQHbfAXxmgxkENrKTDUHgJSHiHzCticzzkDCo242IaXMlGndQedVHFo4cfgrcwRYrCLxD/fAQlqZIQDzOR3TDnFYYfVrJlssQPIqDiuc0Wf02BKWRNsX3AxCcpmxzug29q9lBhY6lBkSkPZkakChS5khzOh2TgmrOKDQocwQgaRVHE5ofzLjOKPbORX0DalZPCbEhDE9mfX7msGEoytyxi5ZzqQIA9NTxJwhWyCEEEL+QAghhPyBEEII+QMhhBDyB0IIIeQPhBBCyB8IIYSQPxBCCCF/IIQQQv5ACCGE/IEQQgj5AyGEEPIHQggh5A+EEJ5NINQfCPUHQv2BUH8g1B8I9ef8hf8B3S6/qwQfzeIAAAAASUVORK5CYII='
     }else{
x=this.image
     }
  
return x


}



}
