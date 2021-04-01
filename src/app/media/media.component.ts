import { Component, OnInit } from '@angular/core';

declare var $: any;
import {PageServiceService} from './../pages-service/page-service.service';

interface media{
  _id:number,
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
  constructor(private pserv:PageServiceService) { }

  ngOnInit(): void {
this.pserv.GetMedia().toPromise().then(

  (data:media[])=>{
    this.m=data
  }
)

    $(document).ready(function(){

      $('#carouselExampleIndicators').carousel({
        interval: 2000
      })
    })



  }



}
