import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{memebre} from './../membre';
import { Observable } from 'rxjs';

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
export class ServiceAdminService {



constructor(private h:HttpClient){

}


//Membre
AjouterMembre(val){
 return this.h.post("http://localhost:3000/membre",val)


}
ListeMembre(){
  return this.h.get<PeriodicElement[]>('http://localhost:3000/membre')
}

getMembre(val){
  return this.h.get<PeriodicElement>('http://localhost:3000/membre/'+val)
}

modifier(val){
  return this.h.put("http://localhost:3000/membre",val)
}

//suppression membre
supprimerMembre(val){
  
 return this.h.delete('http://localhost:3000/membre/'+val)


}


  
}
