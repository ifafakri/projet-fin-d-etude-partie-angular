import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

interface poste {
  nomPoste:string
}

interface rep{
  e:Boolean
}


interface role {
  poste:string,
  formation:{ajout:Boolean,suppression:Boolean,modufication:Boolean},
  membre:{ajout:Boolean,suppression:Boolean,modufication:Boolean},
  projet:{ajout:Boolean,suppression:Boolean,modufication:Boolean},
  page:{modufication:Boolean},
  recrutement:{affichage:Boolean},
  historique:{affichage:Boolean},
  contact:{affichage:Boolean}


}
interface hist {
  nom:string,
  prenom:string,
  action:string,
  description:string,
  date:string
  
  }
  interface hist2 {
    id:number
    nom:string,
    prenom:string,
    action:string,
    description:string,
    date:string
    
    }
@Injectable({
  providedIn: 'root'
})
export class AcceeServiceService {

  constructor(private h:HttpClient) { }

// Accee
//initialiser l accee au poste
initialiser(val){
 return this.h.put('/api/AjoutAcceePoste',val)

}


//modifier accee formation 
acceFormation(val){
 return this.h.put('/api/acceeFormation',val)
}

//modifier accee membre 
AcceMemmbre(val){

 return this.h.put('/api/acceeMembre',val)
}

//modifier accee projet 

AcceProjet(val){
 return this.h.put('/api/acceeProjet',val)
}
//modifier accee page 
AccePage(val){
  return this.h.put('/api/acceePage',val)
}


//modifier accee recrutement 
AcceeRecrutement(val){
 return this.h.put('/api/acceeRecrutement',val)
}

//modifier accee historique 
AcceeHistorique(val){
 return this.h.put('/api/acceeHistorique',val)
}
AcceContact(val){
 return this.h.put('/api/acceeContact',val)
}

// creation poste 

CreationPoste(val){
  return this.h.post("/api/poste",val)
}

GetPost(){

  return this.h.get<poste[]>("/api/poste")

}

  // Recherche l existance d une poste dans la table role
rechrchePosteInAcceeT(p){
  return this.h.get<Boolean>('/api/rechercheAcceePoste/'+p)
}

//initializer un champ Role pour une nouvelle poste
Inisializer(p){
  return this.h.put('/api/AjoutAcceePoste',p)
}

//get l accee d une poste

getAcceePoste(p){
  return this.h.get<role>('/api/AcceePoste/'+p)
}
// Ajout HistoriqueUser
AjoutHistoriqUser(p){
  return this.h.post('/api/HistoriqueUser',p)
}
//suppression Historique user
SuppressionHistoriqUser(p){
  return this.h.delete('/api/HistoriqueUser/'+p)
}
// get l historique de tout les membre
GetHistoriqUser(){
  return this.h.get<hist2[]>('/api/HistoriqueUser')
}



getMotPass(val){
  return this.h.get<rep>('/api/motdepass/'+val)


}




}
