import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { PageServiceService } from './../pages-service/page-service.service';
import {ServiceAdminService} from './../serviceAdmin/service-admin.service'
declare var $: any;
interface page {
  home: [{ titre: string, description: string, image: string }, { titre: string, description: string, image: string }],
  historique: [{ titre: string, description: string, image: string }, { titre: string, description: string, image: string }],
  adhesion: [{ titre: string, description: string }, { titre: string, description: string }, { titre: string, description: string }],
  presentation: [{ titre: string, description: string, image: string }, { titre: string, description: string, image: string }, { titre: string, description: string, image: string }, { titre: string, description: string, image: string }]
}
interface home{
  vision:{titre:string,description:string},
  mission:{titre:string,description:string},
  presentation:{titre:string,description:string,image:string},
  credo:{titre:string,description:string},
  
  }
  export interface PeriodicElement {
    _id:number
    nom: string,
  
    prenom: string,
  
    dnais:string,
    numtel:string,
    mail:string,
    poste:string,
    dateposte:string,
    motpass:string,
  image:string
  
  
  }

interface config {

  email: string,
  pass: string,
  recrutement: { dateD: Date, dateF: Date }

}
interface config{

  email:string,
pass:string,
recrutement:{dateD:Date,dateF:Date}

}
interface projet2{
  id:number
  titre:string,
  text:string,
  image:string[],
  dat?:Date,
formateur?:string,
inscrir?:Boolean
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  anne: number = 0
  action: number = 0
  formation: number = 0
  Region: number = 0
  home: page


  logedIn = false
  b="";
  conf:config
  c: config
  d: Date
  dd: Date
  df: Date
  y: string
  m: string
  day: string
  y2: string
  m2: string
  day2: string
  ch: string
  ch2: string
  test: string
  rec: Boolean
  listeform: projet2[]
  listeprojet: projet2[]
  public lp:projet2[]
  url2= "/projetDetails/"
  h:home
  f1:number=0
  f=0
  m3=0
  a=0
  f2:number=0
  f3:number=0
  top: number;
  constructor(private Rout: Router,private msrv:ServiceAdminService , private pserv: PageServiceService) {//statestique annee
    this.logedIn = localStorage.getItem("logedIn") == "true"

    setTimeout(() => {
      setInterval(() => {
        if (this.anne <= 58) {
          this.anne++
        }

      }, 50)

    }, 2000);

    //statestique annee
    setTimeout(() => {
      setInterval(() => {
        if (this.action <= 799) {
          this.action++
        }

      }, 8)

    }, 2000);

    //statestique formation
    setTimeout(() => {
      setInterval(() => {
        if (this.formation <= 1299) {
          this.formation++
        }

      }, 5)

    }, 2000);
  }
  getLogin() {
    this.Rout.navigateByUrl('login')
  }





  mbr:PeriodicElement[]

  async ngOnInit() {
    this.logedIn = localStorage.getItem("logedIn") == "true"
   await this.pserv.getHome().toPromise().then((data:home) => {
this.h=data
    console.log(data)
    })
        //get la liste des projet
  await  this.pserv.getListeProjet().toPromise().then(
    (data: projet2[]) => {
      if (data.length <= 4) {
        this.lp = data
      } else {
           this.lp=data.slice(0,4)
      }

    }
  )
      //membre
await this.msrv.ListeMembre().toPromise().then(
  (data:PeriodicElement[])=>{
 this.m3=data.length
 this.mbr=data
  }
)

//formations

await this.pserv.getListeformation().toPromise().then(
  (data:projet2[])=>{
this.f=data.length
  }
)
//projet /actions

await this.pserv.getListeProjet().toPromise().then(
  (data:projet2[])=>{
    this.a=data.length
  }
)
    this.d = new Date()
    await this.pserv.getConfig().toPromise().then(

      (data: config) => {
        this.c = data
      }
    )

    this.ch = this.c.recrutement.dateD.toLocaleString()
    this.ch2 = this.c.recrutement.dateF.toLocaleString()

    this.y = this.ch.substr(0, 4)
    this.m = this.ch.substr(5, 2)
    this.day = this.ch.substr(8, 2)
    this.dd = new Date(Number(this.y), Number(this.m) - 1, Number(this.day))

    this.y2 = this.ch2.substr(0, 4)
    this.m2 = this.ch2.substr(5, 2)
    this.day2 = this.ch2.substr(8, 2)
    this.df = new Date(Number(this.y2), Number(this.m2) - 1, Number(this.day2))


    if (this.d >= this.dd && this.d <= this.df) {
      this.rec = true

    } else {
      this.rec = false
    }


    // get la liste de formations
  await  this.pserv.getListeformation().toPromise().then(
      (data: projet2[]) => {
     

        if (data.length <= 4) {
          this.listeform = data
        } else {

         
this.listeform=data.slice(0,4)
console.log(this.listeform)
        


        }

      }
    )


// get la liste des membres



//jquery

await $(document).ready(function(){

  $(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});





})



  }



  cutch(val) {
    let val2 = ''
    if (val.length <= 100) {
      return val
    } else {
      let j = 0

      for (j = 0; j < 100; j++) {

        val2 = val2 + val[j]

      }
    }
    return val2 + '....'

  }

  geturl(id) {

    let url = "/formationdetails/" + id
   
    return url


  }


  getFormationdate(val: Date) {

    let d = val.toLocaleString()
    return d.substr(8, 2)


  }
  getFormationMonth(val: Date) {

    let m = val.toLocaleString()

    return m.substr(5, 2)
  }


   val:string="erfe r;djsfhd sjfhd;jdhfdshfjsd;kjdhsjdhjs;jhjdhfsj"

  line(val1){
    
   let search = ';'
  let  replaceWith = '<br><br>';
    let c= val1.replaceAll(search,replaceWith)

  


return c



  }



  @HostListener("document:scroll")
  scrollFunction() {
    this.top = document.documentElement.scrollTop
    if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {

      let s1 = setInterval(() => {
        if (this.f1 < this.f) {
          this.f1 = this.f1 + 1
        }



      }, 40)

   let s2=   setInterval(() => {
        if (this.f2 < this.m3) {
          this.f2 = this.f2 + 1
        }else{
        }


      }, 40)

   let s3=   setInterval(() => {
        if (this.f3 < this.a) {
          this.f3 = this.f3 + 1
        }
        else{
          
        
        }



      }, 40)

    }

  }

}
