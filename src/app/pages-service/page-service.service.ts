import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
interface page{
  home:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    historique:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    adhesion:[{titre:string,description:string},{titre:string,description:string},{titre:string,description:string}],
    presentation:[{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string}]
}

interface partenair{
  _id:number,
  image:string
}
interface media{
  _id:number,
  image:string,
  video:string,
  description:string,
  titre:string
}
@Injectable({
  providedIn: 'root'
})
export class PageServiceService {

  constructor(private h:HttpClient) { }

  //getTousLesPages
  getPage(){
    return this.h.get<page[]>('http://localhost:3000/pages')
  }
//modifier Adhession elem1
ModifierAdhessionElm1(val){
  return this.h.put('http://localhost:3000/adhesionElm1',val)

}

//modifier Adhession elem2
ModifierAdhessionElm2(val){
  return this.h.put('http://localhost:3000/adhesionElm2',val)

}
//modifier Adhession elem3
ModifierAdhessionElm3(val){
  return this.h.put('http://localhost:3000/adhesionElm3',val)

}
//modifier visionhome
modifierVisioHome(val){
  return this.h.put('http://localhost:3000/vision',val)
}
//modifier Credohome
modifierCredoHome(val){
  return this.h.put('http://localhost:3000/credo',val)
}
//modifier historique partie 1
modifierHistoriquePartie1(val){
  return this.h.put('http://localhost:3000/historiqueP1',val)
}
//modifier historique partie 2
modifierHistoriquePartie2(val){
  return this.h.put('http://localhost:3000/historiqueP2',val)
}
//modifier presentation general
modifierPresentationGeneral(val){
  return this.h.put('http://localhost:3000/presentationGeneral',val)
}

//modifier presentation mission
modifierPresentationMission(val){
  return this.h.put('http://localhost:3000/presentationMission',val)
}
//modifier presentation mission
modifierPresentationVision(val){
  return this.h.put('http://localhost:3000/presentationVision',val)
}

//modifier presentation mission
modifierPresentationCredo(val){
  return this.h.put('http://localhost:3000/presentationCredo',val)
}


// Ajouter Partenair
ajouterPartenair(val){
  return this.h.post('http://localhost:3000/partenair',val)
}
//list des partenaire
listepartenair(){
  return this.h.get<partenair[]>('http://localhost:3000/partenair')
}

  //supprimer partenair 

  supprimerPartenair(val){
   return this.h.delete('http://localhost:3000/partenair/'+val)
  }

//ajout media 
ajoutMedia(val){

  return this.h.post('http://localhost:3000/media',val)
  
  }
  //modifier media
  ModifierMedia(val){

    return this.h.put('http://localhost:3000/media',val)
    
    }
    //supprissio media
  suppressionMedia(val){

    return this.h.delete('http://localhost:3000/media/'+val)
    
    }
    //liste des media
    GetMedia(){

      return this.h.get<media[]>('http://localhost:3000/media')
      
      }



}

//http://localhost:3000/pages