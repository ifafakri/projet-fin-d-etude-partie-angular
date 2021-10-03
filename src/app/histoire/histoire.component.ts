import { Component, OnInit } from '@angular/core';
import{PageServiceService} from './../pages-service/page-service.service';
interface page{
  home:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    historique:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    adhesion:[{titre:string,description:string},{titre:string,description:string},{titre:string,description:string}],
    presentation:[{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string}]
}




interface person{
  nom:string,age:number
}




@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})
export class HistoireComponent implements OnInit {

  tab=[
    [{nom:'ab',age:22},{nom:'abc',age:15}
    ,{nom:'abcd',age:30}]

]

  tab2:any[]

  p:page
  constructor(private pserv:PageServiceService) { }

  ngOnInit(): void {

    this.pserv.getPage().subscribe(
      (data)=>{
data.forEach(element => {
  this.p=element
});

      }
    )
  }

}
