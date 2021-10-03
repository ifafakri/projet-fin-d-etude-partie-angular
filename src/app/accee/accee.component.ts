import { Component, OnInit } from '@angular/core';
import{AcceeServiceService} from './accee-service.service';
import{Router} from '@angular/router';
import {NgForm} from '@angular/forms';
interface poste {
  nomPoste:string
}
@Component({
  selector: 'app-accee',
  templateUrl: './accee.component.html',
  styleUrls: ['./accee.component.css']
})
export class AcceeComponent implements OnInit {

  displayedColumns: string[] = ['poste', 'modifier l accee'];

  dataSource :poste[]
  constructor(private aserv:AcceeServiceService,private r:Router) { }

  ngOnInit(): void {
this.aserv.GetPost().toPromise().then(
(data:poste[])=>{
  this.dataSource =data

  this.dataSource.forEach((element,index) => {
    
    if(element.nomPoste=='president'){
      this.dataSource.splice(index,1)
    }


  });



  console.log(data)
}

)
console.log(this.dataSource )
  }

  affichePoste(val){
var url='/modifAccee/'+val
this.r.navigateByUrl(url)

  }



  ajoutPost(f:NgForm){
    this.aserv.CreationPoste(f.value).subscribe()
    console.log(f.value)
  }



}
