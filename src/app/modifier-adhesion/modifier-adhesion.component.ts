import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import {PageServiceService} from './../pages-service/page-service.service';
interface page{
  home:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    historique:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    adhesion:[{titre:string,description:string},{titre:string,description:string},{titre:string,description:string}],
    presentation:[{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string}]
}
@Component({
  selector: 'app-modifier-adhesion',
  templateUrl: './modifier-adhesion.component.html',
  styleUrls: ['./modifier-adhesion.component.css']
})
export class ModifierAdhesionComponent implements OnInit {

t:page
  constructor(private psrv:PageServiceService) { }

  ngOnInit(): void {
this.psrv.getPage().subscribe(data =>{
  data.forEach(element => {
    this.t=element
  });

  


})

  }
  modifierElm1(f:NgForm){
    this.psrv.ModifierAdhessionElm1(f.value).subscribe()
      }

      modifierElm2(f2:NgForm){
        this.psrv.ModifierAdhessionElm2(f2.value).subscribe()
        console.log(f2.value)
          }

          modifierElm3(f3:NgForm){
            this.psrv.ModifierAdhessionElm3(f3.value).subscribe()
              }

}
