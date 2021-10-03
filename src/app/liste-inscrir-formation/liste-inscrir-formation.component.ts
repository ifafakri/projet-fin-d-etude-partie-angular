import { Component, OnInit } from '@angular/core';
import{PageServiceService} from './../pages-service/page-service.service';
interface projet2{
  id:number
  titre:string,
  text:string,
  image:string[],
  dat:Date,
formateur:string,
}


@Component({
  selector: 'app-liste-inscrir-formation',
  templateUrl: './liste-inscrir-formation.component.html',
  styleUrls: ['./liste-inscrir-formation.component.css']
})
export class ListeInscrirFormationComponent implements OnInit {

url='inscrirDetails/'


 ELEMENT_DATA: projet2[]
 displayedColumns: string[] = ['titre', 'liste d inscrir', ];
 dataSource:projet2[]
  constructor(private psrv:PageServiceService) { }

 async  ngOnInit() {
await this.psrv.getListeformation().toPromise().then(
  (data:projet2[])=>{
    this.ELEMENT_DATA=data




  }
)

this.dataSource= this.ELEMENT_DATA;

  }
 
}
