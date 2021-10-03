import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{PageServiceService} from './../pages-service/page-service.service';

declare var $: any;
interface config{

  email:string,
pass:string,
recrutement:{dateD:Date,dateF:Date}

}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private r:Router,private pserv:PageServiceService) { 

  }
  conf:config
  rec:Boolean
  c:config
  d:Date
  dd:Date
  df:Date
  y:string
  m:string
  day:string
  y2:string
  m2:string
  day2:string
  ch:string
  ch2:string
  test:string


//Route
getPresentation(){
  this.r.navigateByUrl('presentation')
}
getAdhesion(){
  this.r.navigateByUrl('adhesion')
}

getHistoire(){
  this.r.navigateByUrl('histoire')
}
getContact(){

  this.r.navigateByUrl('contact')


}
getHome(){

  this.r.navigateByUrl('home')
}
getactivite(){

  this.r.navigateByUrl('activite')
}


getMedia(){
  this.r.navigateByUrl('media')
}
getPartenaire(){
  this.r.navigateByUrl('partenaire')
}
getBureau(){
  this.r.navigateByUrl('bureau')
}

a:boolean=false
b:boolean=false
logedIn=false
afficher(val){

  if(val==='a'){
    if(this.a===true){

      this.a=false
      this.b=false

    }else{
      this.a=true
      this.b=false

    }
  }else{

    if(this.b===true){

      this.a=false
      this.b=false

    }else{
      this.a=false
      this.b=true

    }

  }

}






async  ngOnInit() {
    this.logedIn = localStorage.getItem("logedIn") == "true"
    this.d=new Date()
  await this.pserv.getConfig().toPromise().then(
 
   (data:config)=>{
     this.c=data
   }
 )
 
 this.ch=this.c.recrutement.dateD.toLocaleString()
 this.ch2=this.c.recrutement.dateF.toLocaleString()
 
 this.y=this.ch.substr(0,4)
 this.m=this.ch.substr(5,2)
 this.day=this.ch.substr(8,2)
 this.dd=new Date(Number(this.y),Number(this.m)-1,Number(this.day))
 
 this.y2=this.ch2.substr(0,4)
 this.m2=this.ch2.substr(5,2)
 this.day2=this.ch2.substr(8,2)
 this.df=new Date(Number(this.y2),Number(this.m2)-1,Number(this.day2))
 

 if(this.d>= this.dd  && this.d<=this.df ){
this.rec=true
 
 }else{
  this.rec=false
 }

 this.pserv.getConfig().toPromise().then(
  (data:config)=>{
    this.conf=data
  }
)
    

    $(document).ready(function(){

      $('.dropdown').mouseover(function(){
        $('.dropdown-menu').show()
      
        $(this).dropdown('toggle')
    
    })
    $('.dropdown').mouseout(function(){
        $('.dropdown-menu').hide()
    
    })


    })
  

  }

}
