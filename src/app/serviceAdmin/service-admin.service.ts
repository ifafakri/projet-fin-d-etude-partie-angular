import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{memebre} from './../membre';
import { Observable } from 'rxjs';


interface bureaux{
  _id:number,
  nom:string,
  prenom:string,
 description:string,
    mail:string,
    poste:string,
    image:string,
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

@Injectable({
  providedIn: 'root'
})
export class ServiceAdminService {



constructor(private h:HttpClient){

}


//Membre
AjouterMembre(val){
 return this.h.post("api/membre",val)


}
ListeMembre(){
  return this.h.get<PeriodicElement[]>('api/membre')
}

getMembre(val){
  return this.h.get<PeriodicElement>('api/membre/'+val)
}

modifier(val){
  return this.h.put("api/membre",val)
}

//suppression membre
supprimerMembre(val){
  
 return this.h.delete('api/membre/'+val)


}


// modifier Profile
modifProfile(val){
  return this.h.put("api/membre",val)


}
// modifier Profile
modifCompt(val){
  return this.h.put("api/membre",val)


}

// get Profile

getProfile(val){
  return this.h.get<profile>('api/profile/'+val)

}


getPresedent(){

  return this.h.get<PeriodicElement>('api/president')

}


// modif poste du membre


modifmembrepost(val){
  return this.h.put("api/modifpost",val)

}



// Ajout person au bureaux 


AjoutPerson(val){
  return this.h.post("api/bureaux",val)

}
// get liste de bureaux
GetBureaux(){
  return this.h.get<bureaux[]>("api/bureaux")

}
modifierPostBur(val){

  return this.h.put("api/bureaux",val)



}


supprimerPersonBureaux(val){
  return this.h.delete("api/bureaux/"+val)

}


  
}
