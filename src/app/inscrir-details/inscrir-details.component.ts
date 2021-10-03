import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{PageServiceService} from './../pages-service/page-service.service'
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
@Component({
  selector: 'app-inscrir-details',
  templateUrl: './inscrir-details.component.html',
  styleUrls: ['./inscrir-details.component.css']
})
export class InscrirDetailsComponent implements OnInit {
  ELEMENT_DATA:inscrir[]
  displayedColumns: string[] = ['nom','email','details']

  dataSource:inscrir[]  
  constructor(private psrv:PageServiceService , private rout:ActivatedRoute) { }

  id=this.rout.snapshot.params['id']
ins:inscrir={

  _id:0,
  nom:'',
  dat:new Date(),
  adresemail:'',

  telepone:'',
  lienfb:'',
  profission:'',
  domaine:'',
  competance:'',
  idform:'',
  parrain:'',
  actif:'',
  association:'',
  deplacement:'',
  objectif:''

}
  async ngOnInit() {
   
 await this.psrv.getInscrirForm(this.id).toPromise().then(
  (data:inscrir[])=>{
this.ELEMENT_DATA=data


  }
)

this.dataSource=this.ELEMENT_DATA
    


  }


  getDetail(val){

    this.ELEMENT_DATA.forEach(element => {
      if(element._id==val){
        this.ins=element
      }



    });



  }





}
