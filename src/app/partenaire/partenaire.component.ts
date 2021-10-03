import { Component, OnInit } from '@angular/core';
import{PageServiceService} from './../pages-service/page-service.service';
interface partenair{
  _id:number,
  image:string
}
@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {


  i=-1
prt:partenair[]

  constructor(private psrv:PageServiceService) { }

async  ngOnInit() {

await this.psrv.getPartenair().toPromise().then(
  (data:partenair[])=>{
    this.prt=data
    console.log(data)
  }
)


  }



func(){

this.i+=1
  return this.i.toString()

}



}
