import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { PageServiceService } from './../pages-service/page-service.service'; import { LoginserviceService } from './../loginservice/loginservice.service';
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
interface partenair {
  _id: number,
  image: string
}
@Component({
  selector: 'app-modif-partenair',
  templateUrl: './modif-partenair.component.html',
  styleUrls: ['./modif-partenair.component.css']
})
export class ModifPartenairComponent implements OnInit {

  constructor(private pserv: PageServiceService, private logsrv: LoginserviceService, private acsrv: AcceeServiceService) { }

  imageData: string
  f: File
  listePartenaire: partenair[]
  m: PeriodicElement
  dat: string = new Date().toDateString();

  async ngOnInit() {
 
    
  }


  async uploadImage(event) {
    this.f = event.target.files[0]
    await this.convertto64(this.f).toPromise().then(
      (data: string) => {
        this.imageData = data
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

  ajouterPartenaire(f: NgForm) {

    this.pserv.ajouterPartenair({ image: this.imageData }).subscribe()
    this.acsrv.AjoutHistoriqUser({ nom: this.m.nom, prenom: this.m.prenom, action: 'a', description: 'ajout partenaire ', date: this.dat }).subscribe()


    console.log('ok !')

  }


  //supprimer une image
  supprimerImage(val) {

    this.pserv.supprimerPartenair(val).subscribe()
    this.acsrv.AjoutHistoriqUser({ nom: this.m.nom, prenom: this.m.prenom, action: 's', description: 'supprimer partenaire', date: this.dat }).subscribe()


  }
}
