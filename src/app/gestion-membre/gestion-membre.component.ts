import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceAdminService } from './../serviceAdmin/service-admin.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogdetailsComponent } from '../dialogdetails/dialogdetails.component';
import { EditmembredialogComponent } from '../editmembredialog/editmembredialog.component';
import { DeletemembredialogComponent } from '../deletemembredialog/deletemembredialog.component';
import { AjouterMembredialogComponent } from '../ajouter-membredialog/ajouter-membredialog.component';
import {LoginserviceService} from './../loginservice/loginservice.service';


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
   image: string

}

@Component({
   selector: 'app-gestion-membre',
   templateUrl: './gestion-membre.component.html',
   styleUrls: ['./gestion-membre.component.css']
})



export class GestionMembreComponent implements AfterViewInit, OnInit {
   ELEMENT_DATA: PeriodicElement[] = []

   getRecord(nom) {
      alert(nom);
   }
   //DetailsDialog
   displayedColumns: string[] = ['nom',  'mail', "getdetails", "modifier", "supprimer"];

   constructor(public dialog: MatDialog, private serv: ServiceAdminService,private logserv:LoginserviceService

      ) {

   } 
   
   dataSource = new MatTableDataSource<PeriodicElement>([]);
  async  ngOnInit() {
  
   var token=localStorage.getItem('token')
 

   let email=await this.logserv.isConnect({t:token})
 console.log(email)
 
    await   this.serv.ListeMembre().toPromise().then((data:PeriodicElement[]) => {
      this.dataSource = new MatTableDataSource(data)

        
      })
   }




   async openDialog(email) {




      const dialogRef = this.dialog.open(DialogdetailsComponent, {
         width: '250px',
         data: { mail: email }

      });

      dialogRef.afterClosed().subscribe(result => {
         console.log('The dialog was closed');

      });
   }




   // modifier

    modifierMembre(mail: string) {

      const dialogRef = this.dialog.open(EditmembredialogComponent, {
         width: '300px',
         data: { mail: mail }
      });

      dialogRef.afterClosed().subscribe(result => {
         console.log('The dialog was closed');

      });
   }

   //delete membre

    deleteMembre(mail: string) {
      const dialogRef = this.dialog.open(DeletemembredialogComponent, {
         width: '300px',
         data: { mail: mail }
      });

      dialogRef.afterClosed().subscribe(result => {
         console.log('The dialog was closed');

      });


   }






   //Ajouter Membre

    AjoutMembre() {
      const dialogRef = this.dialog.open(AjouterMembredialogComponent, {
         width: '300px',
      });

      dialogRef.afterClosed().subscribe(result => {
         console.log('The dialog was closed');

      });
   }

      @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
   }
}







/*
const ELEMENT_DATA: PeriodicElement[] = [
  {
       nom: 'Hydrogen', prenom: 1.0079, mail: 'H'},
  {
     nom: 'Helium', prenom: 4.0026, mail: 'He'},
  {
     nom: 'Lithium', prenom: 6.941, mail: 'Li'},
  {
     nom: 'Beryllium', prenom: 9.0122, mail: 'Be'},
  {
     nom: 'Boron', prenom: 10.811, mail: 'B'},
  {
     nom: 'Carbon', prenom: 12.0107, mail: 'C'},
  {
     nom: 'Nitrogen', prenom: 14.0067, mail: 'N'},
  {
     nom: 'Oxygen', prenom: 15.9994, mail: 'O'},
  {
     nom: 'Fluorine', prenom: 18.9984, mail: 'F'},
  {
                                        nom: 'Neon', prenom: 20.1797, mail: 'Ne'},
  {
     nom: 'Sodium', prenom: 22.9897, mail: 'Na'},
  {
     nom: 'Magnesium', prenom: 24.305, mail: 'Mg'},
  {
     nom: 'Aluminum', prenom: 26.9815, mail: 'Al'},
  {
     nom: 'Silicon', prenom: 28.0855, mail: 'Si'},
  {
     nom: 'Phosphorus', prenom: 30.9738, mail: 'P'},
  {
     nom: 'Sulfur', prenom: 32.065, mail: 'S'},
  {
     nom: 'Chlorine', prenom: 35.453, mail: 'Cl'},
  {
     nom: 'Argon', prenom: 39.948, mail: 'Ar'},
  {
     nom: 'Potassium', prenom: 39.0983, mail: 'K'},
  {
     nom: 'Calcium', prenom: 40.078, mail: 'Ca'},
];
*/

