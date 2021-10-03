import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from './../loginservice/loginservice.service';

export interface page {
  page: string;
  affiche: string;
  modifier: string;
 
}

const elmd:page[]=[
  {  page: 'home',
    affiche: '/',
    modifier: '/modifieHome'},

    {  page: 'adhesion',
    affiche: '/adhesion',
    modifier: '/modifierAdhesion'},
    {  page: 'presentation',
    affiche: '/presentation',
    modifier: '/modiferPresentation'},
    {  page: 'historique',
    affiche: '/histoire',
    modifier: '/modifhistoire'},
    {  page: 'media',
    affiche: '/media',
    modifier: '/modifMedia'},

    {  page: 'partenaire',
    affiche: '/partenaire',
    modifier: '/modifierPartenair'},

]


@Component({
  selector: 'app-gestion-pages',
  templateUrl: './gestion-pages.component.html',
  styleUrls: ['./gestion-pages.component.css']
})
export class GestionPagesComponent implements OnInit {

  constructor(private logserv:LoginserviceService

    ) { }
  displayedColumns: string[] = ['page', 'affiche', 'modifier'];
  dataSource:page[]
  async ngOnInit() {
    var token=localStorage.getItem('token')
 
    let email=await this.logserv.isConnect({t:token})
    console.log(email)
    
    this.dataSource = elmd;
  }

}
