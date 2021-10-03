import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface PeriodicElement {
  _id: number
  nom: string;

  prenom: string;

  dnais: string;
  numtel: string;
  mail: string;
  poste: string;
  dateposte: string;
  motpass: string;



}

interface auth{
  t:string,
  auth:Boolean
}

interface isCon{
  mail:string,
  b:Boolean
}






@Injectable({
  providedIn: 'root'
})

export class LoginserviceService {


  Showhome = true
  ShowAdminDashboard = false
  constructor(private h: HttpClient, private r: Router) { }
  getMembre(val) {
    return this.h.get<PeriodicElement>('/api/membre/' + val)
  }

 




  getlogin(val){
    return this.h.post<auth>('/api/authentification' ,val).toPromise().then(


    (data:auth)=>{
if(data.auth===true){
  this.r.navigateByUrl('/dashoardAdmin')
  localStorage.setItem('token', data.t)

}else{
  localStorage.setItem('token','')

}


    }
    )
  }


 async isConnect(tokn){
    return await this.h.post<isCon>('/api/isConnect' ,tokn).toPromise().then(

(data:isCon)=>{

  if(data.b===true){
    this.r.navigateByUrl('/dashboard')
    localStorage.setItem('logedIn','true')
    return data.mail
   
  }else{

   this.r.navigateByUrl('/login')
    localStorage.setItem('token', '')
    localStorage.setItem('logedIn','false')


  }





}

    )

  }






/*
  connection = 'non'
  log: PeriodicElement
  private mail: any
  m: PeriodicElement
  // fonction pour tester 
  async isconnected(mail, password) {


    await this.getMembre(mail).toPromise().then(
      (data: PeriodicElement) => {
        this.m = data
      }
    )
    if (this.m.mail != mail || this.m.motpass != password) {
      localStorage.setItem('logedIn', 'false')
      this.r.navigateByUrl('/login')
      return false
    } else {
      return true
    }

  }




  async getlogin(val1: PeriodicElement) {

    await this.getMembre(val1.mail).toPromise().then(
      (data: PeriodicElement) => {
        this.log = data
        localStorage.setItem('logedIn', 'true')
      }
    )
    console.log(this.log.motpass)



    if (val1.motpass == this.log.motpass) {

      this.connection = 'oui'
      localStorage.setItem('mail', this.log.mail)
      localStorage.setItem('motpass', this.log.motpass)
      this.ShowAdminDashboard = true
      this.Showhome = false

      this.r.navigateByUrl('/dashoardAdmin').then(() => {
        window.location.reload();
      });
      return true
    } else {

      localStorage.setItem('mail', '')
      localStorage.setItem('motpass', '')
      this.ShowAdminDashboard = false
      this.Showhome = true
      return false
    }


  }

*/




}
