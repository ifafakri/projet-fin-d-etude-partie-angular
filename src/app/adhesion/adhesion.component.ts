import { Component, OnInit } from '@angular/core';
import {PageServiceService} from './../pages-service/page-service.service';
interface page{
  home:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    historique:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    adhesion:[{titre:string,description:string},{titre:string,description:string},{titre:string,description:string}],
    presentation:[{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string}]
}

@Component({
  selector: 'app-adhesion',
  templateUrl: './adhesion.component.html',
  styleUrls: ['./adhesion.component.css']
})
export class AdhesionComponent implements OnInit {

  p:page
  constructor(private pserv:PageServiceService) { }

  ngOnInit(): void {
this.pserv.getPage().toPromise().then(
  (data:page[])=>{
    data.forEach(e => {
      this.p=e
    });

  }
)

  }

}
