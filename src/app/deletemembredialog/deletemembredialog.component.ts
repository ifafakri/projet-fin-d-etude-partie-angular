import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{ServiceAdminService} from './../serviceAdmin/service-admin.service';


@Component({
  selector: 'app-deletemembredialog',
  templateUrl: './deletemembredialog.component.html',
  styleUrls: ['./deletemembredialog.component.css']
})

export class DeletemembredialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletemembredialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private serv:ServiceAdminService) { }

  ngOnInit(): void {
  }

  membre:{
    nom:string,prenom:string,
    dnais:string,
  numtel:string,
  mail:string,
  poste:string,
  dateposte:string
  }
  supprimer(mail){
    
    this.serv.supprimerMembre(mail).subscribe(data=>{
      console.log(data)
    })

  }


}
