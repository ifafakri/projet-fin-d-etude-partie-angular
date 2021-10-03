import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { PageServiceService } from './../pages-service/page-service.service';
import { LoginserviceService } from './../loginservice/loginservice.service';
import { AcceeServiceService } from './../accee/accee-service.service';
export interface PeriodicElement {
  _id: number
  nom: string;

  prenom: string;

  dnais: string;
  numtel: string;
  mail: string;
  poste: string;
  dateposte: string;
  motpass: string;



}
interface obj {
  image: string,
  description: string
}
interface page {
  home: [{ titre: string, description: string, image: string }, { titre: string, description: string, image: string }],
  historique: [{ titre: string, description: string, image: string }, { titre: string, description: string, image: string }],
  adhesion: [{ titre: string, description: string }, { titre: string, description: string }, { titre: string, description: string }],
  presentation: [{ titre: string, description: string, image: string }, { titre: string, description: string, image: string }, { titre: string, description: string, image: string }, { titre: string, description: string, image: string }]
}
@Component({
  selector: 'app-modifier-prsntation',
  templateUrl: './modifier-prsntation.component.html',
  styleUrls: ['./modifier-prsntation.component.css']
})
export class ModifierPrsntationComponent implements OnInit {
  imagedata1: string;
  f: File
  obj1: obj

  t: page
  m: PeriodicElement
  dat: string = new Date().toDateString();
  constructor(private pserv: PageServiceService, private logsrv: LoginserviceService, private acsrv: AcceeServiceService,
    private toast: ToastrService) { }

 async ngOnInit() {

    var token=localStorage.getItem('token')
 

    let email=await this.logsrv.isConnect({t:token})
  console.log(email)
  
      this.logsrv.getMembre(email).toPromise().then(
        (data: PeriodicElement) => {
          this.m = data


        }
      )
    






    this.pserv.getPage().subscribe(data => {

      data.forEach(element => {

        this.t = element
      });

    })
  }

  async uploadImage(event) {

    this.f = event.target.files[0]
    await this.convertto64(this.f).toPromise().then(
      (data: string) => {
        this.imagedata1 = data
      }

    )

  }

  convertto64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    })
    return observable;


  }

  readFile(file: File, subsciber: Subscriber<any>) {
    const fileRader = new FileReader()
    fileRader.readAsDataURL(file)
    fileRader.onload = () => {
      subsciber.next(fileRader.result)
      subsciber.complete()
    }
    fileRader.onerror = (error) => {
      subsciber.error(error)
      subsciber.complete()
    }

  }

  modifierpresentationGereral(f: NgForm) {
    this.obj1 = { image: this.imagedata1, description: f.value.description }


    this.pserv.modifierPresentationGeneral(this.obj1).subscribe()

    this.acsrv.AjoutHistoriqUser({ nom: this.m.nom, prenom: this.m.prenom, action: 'm', description: 'modifier page presentation :presnetation general ', date: this.dat }).subscribe()

    this.toast.success('page presentation ', ' presentation general modifier')

  }

  //modifier mission
  modifierMission(f2: NgForm) {
    this.pserv.modifierPresentationMission(f2.value).subscribe()


    this.acsrv.AjoutHistoriqUser({ nom: this.m.nom, prenom: this.m.prenom, action: 'm', description: 'modifier page presentation : Mission ', date: this.dat }).subscribe()

    this.toast.success('presentation  ', ' element 1 modifier')

  }

  //modifier vision
  modifierVision(f2: NgForm) {
    this.pserv.modifierPresentationVision(f2.value).subscribe()

    this.acsrv.AjoutHistoriqUser({ nom: this.m.nom, prenom: this.m.prenom, action: 'm', description: 'modifier page presentation : Vision ', date: this.dat }).subscribe()

    this.toast.success('presentation  ', ' element 2 modifier')

  }

  //modifier credo
  modifierCredo(f2: NgForm) {
    this.pserv.modifierPresentationCredo(f2.value).subscribe()

    this.acsrv.AjoutHistoriqUser({ nom: this.m.nom, prenom: this.m.prenom, action: 'm', description: 'modifier page presentation :Credo ', date: this.dat }).subscribe()


    this.toast.success('presentation  ', ' element 3 modifier')

  }






}
