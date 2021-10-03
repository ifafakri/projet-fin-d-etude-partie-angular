import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  d:Date
  y:number
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.router.url)
this.d=new Date()
this.y=this.d.getFullYear()
  }

}
