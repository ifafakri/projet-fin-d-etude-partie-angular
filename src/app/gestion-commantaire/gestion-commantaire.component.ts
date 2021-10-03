import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {LoginserviceService} from './../loginservice/loginservice.service';
import {PageServiceService} from './../pages-service/page-service.service'
interface comantaire{
  id:number,
   idAction:string,
    comantaire:string,
    nom:string,
email:string
,
siteweb:string
}
export interface PeriodicElement {
  actions: string;
  liste_commantaire: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {actions: "formation",liste_commantaire:""},
  {actions: "projet",liste_commantaire:""},

];
interface projet2{
  id:number,
  titre:string,
  text:string,
  image:string[],
  dat:Date,
formateur:string,
}
@Component({
  selector: 'app-gestion-commantaire',
  templateUrl: './gestion-commantaire.component.html',
  styleUrls: ['./gestion-commantaire.component.css']
})
export class GestionCommantaireComponent implements OnInit {


  constructor(private psrv:PageServiceService
    ,private logserv:LoginserviceService
    
    ) { }
  displayedColumns: string[] = ['actions', 'liste_commantaire' ];
  displayedColumns2: string[] = ['titre', 'les_commantaires' ];
  displayedColumns3: string[] = ['titre', 'les_commantaires' ];
  dataSource:PeriodicElement[] 
p:projet2[]

f:projet2[]


aff:Boolean=false


dataSource2:projet2[]
dataSource3:projet2[]

url='/listecommantaire/'
 async ngOnInit() {
  var token=localStorage.getItem('token')
 

  let email=await this.logserv.isConnect({t:token})
console.log(email)
this.dataSource=ELEMENT_DATA
   await this.psrv.getListeProjet().toPromise().then(
      (data:projet2[])=>{
        

  

this.dataSource3=data
        
      }
    )
      
 await  this.psrv.getListeformation().toPromise().then(
     (data:projet2[])=>{
       this.dataSource2=data
     }
   )

   


  }  


  minimiser(ch){
let c=''
let i=0
if((ch.length)<=400){
c=ch
}else{
for(i=0;i<400;i++){
c=c+ch[i]



}



}

return c

  }

  affichet(val){

    if(val==='formation'){

      

this.aff=false


     


    }else{
      this.aff=true

    }




  }


  async getlisteCommentaire(val){
    let d:comantaire[]
   await this.psrv.getListCommantaire({id:val}).toPromise().then(
      (data:comantaire[])=>{
       
        if(data.length>0){
          return false
        }else{
          return true
        }
        

      }
    )
    
  }


}
