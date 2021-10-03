import { Component, OnInit, HostListener } from '@angular/core';
import { ServiceAdminService } from './../serviceAdmin/service-admin.service'
import { PageServiceService } from './../pages-service/page-service.service'
declare var $: any;
export interface PeriodicElement {
  _id: number
  nom: string,

  prenom: string,

  dnais: string,
  numtel: string,
  mail: string,
  poste: string,
  dateposte: string,
  motpass: string,
  image: string
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



interface bureaux{
  _id:number,
  nom:string,
  prenom:string,
 description:string,
    mail:string,
    poste:string,
    image:string,
}
interface me { elm: PeriodicElement[] }
interface projet2 {
  _id: number
  titre: string,
  text: string,
  image: string[],
  dat: Date,
  formateur: string,
}
interface presentation {


  titre: string,
  description: string,
  video: string

}
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  f = 50
  m: number
  a = 100
  f1: number = 0
  f2: number = 0
  f3: number = 0
  pres: presentation
  pastpim:bureaux
  presedent: PeriodicElement
  membre = []
  listeMeb:PeriodicElement[]

  senateur:bureaux[]= []
  senaterurArr=[]
  pastpresArr=[]
  pastpres:bureaux[]= []
  conseil:bureaux[]= []




  constructor(private msrv: ServiceAdminService, private psrv: PageServiceService) { }
  top: number
  async ngOnInit() {


   



    //get tous les membres




    //get presentation


    await this.psrv.getPresentation2().toPromise().then(

      (data: presentation) => {

        this.pres = data

      }

    )



   
   //get presedent
await this.msrv.getPresedent().toPromise().then(

  (data:PeriodicElement)=>{

this.presedent=data


    }

)

// get bureaux

await this.msrv.GetBureaux().toPromise().then(
  (data:bureaux[])=>{


    data.forEach((element:bureaux) => {
      if(element.poste=='senateur'){
this.senateur.push(element)

//senaterurArr





      }
      if(element.poste=='past-presedent'){
        this.pastpres.push(element)
      }

      if(element.poste=='conseille juridique'){
this.conseil.push(element)
      }

if(element.poste=='past president immédiat'){
  this.pastpim=element
}




    });
console.log(this.senateur)






  }
)



// get liste senateur

let i=0
let j=3
let pas=this.senateur.length

while(pas>0){

  this.senaterurArr.push(this.senateur.slice(i,j))
i=i+3
j=j+3
pas=pas-3
}

//pastpres

let i1=0
let j1=3
let pas1=this.pastpres.length

while(pas1>0){

  this.pastpresArr.push(this.pastpres.slice(i1,j1))
i1=i1+3
j1=j1+3
pas1=pas1-3
}




// get Membre

await this.msrv.ListeMembre().toPromise().then(
  (data:PeriodicElement[])=>{
this.listeMeb=data

this.listeMeb.forEach((element,index) => {
  if(element.poste==='president'){
    this.listeMeb.splice(index,1)
  }




});




  }
)

console.log(this.listeMeb)


  }
  @HostListener("document:scroll")
  scrollFunction() {
    this.top = document.documentElement.scrollTop
    if (document.body.scrollTop >= 541 || document.documentElement.scrollTop >= 541) {

      let s1 = setInterval(() => {
        if (this.f1 < this.f) {
          this.f1 = this.f1 + 1
        }


      }, 40)

      setInterval(() => {
        if (this.f2 < this.m) {
          this.f2 = this.f2 + 1
        }


      }, 40)

      setInterval(() => {
        if (this.f3 < this.a) {
          this.f3 = this.f3 + 1
        }


      }, 40)

    }

  }

 



}
