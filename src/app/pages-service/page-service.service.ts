import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
interface page{
  home:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    historique:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    adhesion:[{titre:string,description:string},{titre:string,description:string},{titre:string,description:string}],
    presentation:[{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string}]
}
interface projet{
  titre:string,
  dat:Date,
formateur:string,
  text:string,
  image:string[]
}
interface payement{
  nom:string,
  prix:string,
  date:Date
}

interface developpement{
  id:number,
  titre:string,
icon:string,
text:string

}
interface comantaire{
  id:number,
   idAction:string,
    comantaire:string,
    nom:string,
email:string
,
siteweb:string
}

interface projet2{
  id:number
  titre:string,
  text:string,
  image:string[],
  dat?:Date,
formateur?:string,
inscrir?:Boolean
,liens?:string
}

interface partenair{
  _id:number,
  image:string
}
interface media{
  id:number,
  image:string,
  video:string,
  description:string,
  titre:string
}

interface contact{
    id:number,
  nom:string,
email:string,
sujet:string,
message:string,
repond:Boolean
}


interface home{
  vision:{titre:string,description:string},
  mission:{titre:string,description:string},
  presentation:{titre:string,description:string,image:string},
  credo:{titre:string,description:string},
  
  }


interface recrutement{
  _id:number,
  nom:string,
  prenom:string,
datenais:string,
    mail:string,
telephone:string,
 message:string,
 reponce:Boolean
}

interface config{

  email:string,
pass:string,
recrutement:{dateD:Date,dateF:Date}

}

interface presentation{

  
titre:string,
description:string,
video:string

}

interface inscrir{

  _id:number,
  nom:string,
  dat:Date,
  adresemail:string,

  telepone:string,
  lienfb:string,
  profission:string,
  domaine:string,
  competance:string,
  idform:string,
  parrain:string,
  actif:string,
  association:string,
  deplacement:string,
  objectif:string

}

@Injectable({
  providedIn: 'root'
})
export class PageServiceService {

  constructor(private h:HttpClient) { }

  //getTousLesPages
  getPage(){
    return this.h.get<page[]>('/api/pages')
  }
//modifier Adhession elem1
ModifierAdhessionElm1(val){
  return this.h.put('/api/adhesionElm1',val)

}

//modifier Adhession elem2
ModifierAdhessionElm2(val){
  return this.h.put('/api/adhesionElm2',val)

}
//modifier Adhession elem3
ModifierAdhessionElm3(val){
  return this.h.put('/api/adhesionElm3',val)

}
//modofier home
//modifier visionhome
modifierVisionHome(val){
  return this.h.put('/api/homeVisionv2',val)
}
//modifier Credohome
modifierCredoHome(val){
  return this.h.put('/api/homeCredov2',val)
}
// modifier mission home

modifierMissionHome(val){
  return this.h.put('/api/homeMissionv2',val)
}

// modifier presentation home
modifierPresentationHome(val){
  return this.h.put('/api/homePresentationv2',val)
}
// get Home

getHome(){
  return this.h.get<home>('/api/home')
}


//modifier historique partie 1
modifierHistoriquePartie1(val){
  return this.h.put('/api/historiqueP1',val)
}
//modifier historique partie 2
modifierHistoriquePartie2(val){
  return this.h.put('/api/historiqueP2',val)
}
//modifier presentation general
modifierPresentationGeneral(val){
  return this.h.put('/api/presentationGeneral',val)
}

//modifier presentation mission
modifierPresentationMission(val){
  return this.h.put('/api/presentationMission',val)
}
//modifier presentation mission
modifierPresentationVision(val){
  return this.h.put('/api/presentationVision',val)
}

//modifier presentation mission
modifierPresentationCredo(val){
  return this.h.put('/api/presentationCredo',val)
}


// Ajouter Partenair
ajouterPartenair(val){
  return this.h.post('/api/partenair',val)
}
//list des partenaire
listepartenair(){
  return this.h.get<partenair[]>('/api/partenair')
}

  //supprimer partenair 

  supprimerPartenair(val){
   return this.h.delete('/api/partenair/'+val)
  }

//ajout media 
ajoutMedia(val){

  return this.h.post('/api/media',val)
  
  }
  //modifier media
  ModifierMedia(val){

    return this.h.put('/api/media',val)
    
    }
    //supprissio media
  suppressionMedia(val){

    return this.h.delete('/api/media/'+val)
    
    }
    //liste des media
    GetMedia(){

      return this.h.get<media[]>('/api/media')
      
      }
// projet 
//getProjet
getProjet(val){
  return this.h.get<projet2>('/api/projet/'+val)
}
//gettout les projet listeProjet
getListeProjet(){
 return this.h.get<projet2[]>('/api/listeProjet')
  }
  //modifier projet
  modifierProjet(val){
   return this.h.put('/api/projet',val)
    }
//supprimer projet
supprimerProjet(val){
 return this.h.delete('/api/projet/'+val)
  }
  //creation projet
  AjoutProjet(val){
    return this.h.post('/api/projet',val)
     }
//formation
getformation(val){
  return this.h.get<projet2>('/api/formation/'+val)
}
//gettout les formation listeformation
getListeformation(){
 return this.h.get<projet2[]>('/api/listeformation')
  }
  //modifier formation
  modifierformation(val){
   return this.h.put('/api/formation',val)
    }
//supprimer formation
supprimerformation(val){
 return this.h.delete('/api/formation/'+val)

  }
  //creation formation
  Ajoutformation(val){
    return this.h.post('/api/formation',val)
     }


//get Recrutement
getRecrutement(id){
  return this.h.get<recrutement>('/api/recrutement/'+id)

}
//listerecrutement
getlisteRecrutement(){
  return this.h.get<recrutement[]>('/api/listerecrutement')

}
//creer recrutement
creationRecrutement(val){
  return this.h.post('/api/recrutement',val)

}

// Ajout Contact

ajoutContact(val){
  return this.h.post('/api/contact',val)
}
// Get Contact

getContact(){
  return this.h.get<contact[]>('/api/contact')
}
//supprimer contact 


supprimerContact(id){

return this.h.delete('/api/contact/'+id)


}





repondreRecrutement(val){
  return this.h.post('/api/sendMail',val)

}

// supprimer  recrutement 

supprimerRecrutement(id){
  return this.h.delete('/api/recrutement/'+id)
}



getConfig(){

return this.h.get<config>('/api/config')

}

//modifier l email du site
configEmail(val){
  
  return this.h.put('/api/configMail',val)

}
// modifier config de recrutement
configDatRecrutement(val){
  return this.h.put('/api/configRecrut',val)

}

repondContact(val){
  return this.h.post('/api/sendContact',val)
}



//liste partenaire 

getPartenair(){

  return this.h.get<partenair[]>('/api/partenair')
}



// ajout commantaire 
AjoutCommantaire(val){
  return this.h.post('/api/commantaire',val)
}


// supprimer commantaire

supprimerCommant(id){
  return this.h.delete('/api/commantaire/'+id)
}



//get la liste de comantaire de l action commantaire
getListCommantaire(val){
  return this.h.get<comantaire[]>('/api/commantaire/'+val)
}


modifierPresentation2(val){
  
  return this.h.put('/api/presentation2',val)

}

getPresentation2(){


  return this.h.get<presentation>('/api/presentation2')


}
// devekloppement
// ajout developpement
AjoutDev(val){
  return this.h.post('/api/developpement',val)

}
// get dev

getdev(id){
  return this.h.get<developpement>('/api/developpement/'+id)
}


// GET LISTE DEVELOPPEMENT
getListDev(){
  return this.h.get<developpement[]>('/api/listdeveloppement')
}

//modif  dev 

modifdev(val){

  return this.h.put('/api/developpement',val)

}

// supprimer developpement 


supprimDev(val){
 return this.h.delete('/api/developpement/'+val)
}


// inscrir au formation


inscrirFormation(val){
  return this.h.post('/api/inscrir',val)

}


getInscrirForm(id){

  return this.h.get<inscrir[]>('/api/inscrir/'+id)
}




// modifier home


//modif l inscrir de formation
Modifinscrir(val){
  return this.h.put('/api/inscrirForm',val)

}


// Ajout payement

AjoutPayement(val){

  return this.h.post('/api/payement',val)

}


getPayement(){
  return this.h.get<payement[]>('/api/payement')
}




}

///api/pages