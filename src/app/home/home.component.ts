import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{PageServiceService} from './../pages-service/page-service.service';
declare var $: any;
interface page{
  home:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    historique:[{titre:string,description:string,image:string},{titre:string,description:string,image:string}],
    adhesion:[{titre:string,description:string},{titre:string,description:string},{titre:string,description:string}],
    presentation:[{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string},{titre:string,description:string,image:string}]
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  anne:number=0
  action:number=0
  formation:number=0
  Region:number=0
  home:page
  logedIn=false

  constructor(private Rout:Router,private pserv:PageServiceService) {//statestique annee
    this.logedIn = localStorage.getItem("logedIn") == "true"

   setTimeout(() => {
    setInterval(()=>{
    if(this.anne<=58){
    this.anne++
    }

    },50)

    }, 2000);

    //statestique annee
    setTimeout(() => {
    setInterval(()=>{
    if(this.action<=799){
    this.action++
    }

    },8)

    }, 2000);

    //statestique formation
    setTimeout(() => {
    setInterval(()=>{
    if(this.formation<=1299){
    this.formation++
    }

    },5)

    }, 2000); }
getLogin(){
  this.Rout.navigateByUrl('login')
}







  ngOnInit(): void {
    this.logedIn = localStorage.getItem("logedIn") == "true"
  this.pserv.getPage().subscribe(data =>{

data.forEach(element => {

    this.home=element
});
console.log('description home:  '+this.home.home[0].description)

  })


    }




}
