import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';

export interface PeriodicElement {
  _id:number
  nom: string;

  prenom: string;

  dnais:string;
  numtel:string;
  mail:string;
  poste:string;
  dateposte:string;
  motpass:string;



}

@Injectable({
  providedIn: 'root'
})

export class LoginserviceService {


  Showhome=true
  ShowAdminDashboard=false
  constructor(private h:HttpClient,private r:Router) { }
  getMembre(val){
    return this.h.get<PeriodicElement>('http://localhost:3000/membre/'+val)
  }

  connection='non'
log:PeriodicElement
private mail:any
async getlogin(val1:PeriodicElement){

 await this.getMembre(val1.mail).toPromise().then(
    (data:PeriodicElement)=>{
      this.log=data
      localStorage.setItem('logedIn','true')
    }
  )
console.log(this.log.motpass)



if( val1.motpass==this.log.motpass){

this.connection='oui'
localStorage.setItem('mail',this.log.mail)
localStorage.setItem('motpass',this.log.motpass)
this.ShowAdminDashboard=true
this.Showhome=false
this.r.navigateByUrl('/dashoardAdmin').then(() => {
  window.location.reload();
});
return true
}else{

localStorage.setItem('mail','')
localStorage.setItem('motpass','')
this.ShowAdminDashboard=false
this.Showhome=true
return false
}


  }



}
