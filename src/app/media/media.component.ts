import { Component, OnInit } from '@angular/core';

declare var $: any;
import {PageServiceService} from './../pages-service/page-service.service';
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
@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})


export class MediaComponent implements OnInit {
m:media[]

i=-1
prt:partenair[]
  constructor(private pserv:PageServiceService) { }

 async ngOnInit() {
this.pserv.GetMedia().toPromise().then(

  (data:media[])=>{
    this.m=data
  }
)

 await   $(document).ready(function(){

      $('#carouselExampleIndicators').carousel({
        interval: 2000
      })
    })

    await this.pserv.getPartenair().toPromise().then(
      (data:partenair[])=>{
        this.prt=data
        console.log(data)
      }
    )

    




  }



}
