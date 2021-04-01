import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private r:Router) { 

  }

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






  ngOnInit(): void {
   
    $(document).ready(function(){
$(window).scroll(function(){

  var $pos=$(window).scrollTop()
  if($pos>50){
    $('.justify-content-md-end').addClass('containerscroll')
    $('.menu2').addClass('marg')
    $('.menu3').addClass('marg')
  }else{
    $('.justify-content-md-end').removeClass('containerscroll')
    $('.menu2').removeClass('marg')
    $('.menu3').removeClass('marg')
  }

})



//m1
$("#m1").mouseover(function(){
  $('.menu2').css({'visibility':'visible'})
$('.menu2').fadeIn()

})

$(".menu2").mouseleave(function(){
  $('.menu2').css({'visibility':'hidden'})
$('.menu2').fadeOut()

})
$(".categorie").eq(1).mouseover(function(){
  $('.menu2').css({'visibility':'hidden'})
$('.menu2').fadeOut()

})
$(".categorie").eq(2).mouseover(function(){
  $('.menu2').css({'visibility':'hidden'})
$('.menu2').fadeOut()

})
$(".categorie").eq(3).mouseover(function(){
  $('.menu2').css({'visibility':'hidden'})
$('.menu2').fadeOut()

})

//m2
$("#m2").mouseover(function(){
  $('.menu3').css({'visibility':'visible'})
$('.menu3').fadeIn()

})

$(".menu3").mouseleave(function(){
  $('.menu3').css({'visibility':'hidden'})
$('.menu3').fadeOut()

})
$(".categorie").eq(1).mouseover(function(){
  $('.menu3').css({'visibility':'hidden'})
$('.menu3').fadeOut()

})
$(".categorie").eq(0).mouseover(function(){
  $('.menu3').css({'visibility':'hidden'})
$('.menu3').fadeOut()

})
$(".categorie").eq(3).mouseover(function(){
  $('.menu3').css({'visibility':'hidden'})
$('.menu3').fadeOut()

})



$('.button').click(function(){

  var $v=$('.xsm').css("visibility")

  if($v==='hidden'){
    $('.xsm').css({"visibility":"visible"})
$('.xm').slideUp()
  }else{
    $('.xsm').css({"visibility":"hidden"})
    $('.xm').dadeOut()
  }

  $(".close").click(function(){

   
    $('.xm').fadeOut()
     $('.xsm').css({"visibility":"hidden"})
  })

})

$('.body').mouseout(function(){
  $('.menu2').fadeOut()
  $('.menu3').fadeOut()
  $('.menu2').css({'visibility':'hidden'})
  $('.menu3').css({'visibility':'hidden'})

})



    })




  }

}
