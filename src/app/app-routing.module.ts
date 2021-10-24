import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceeComponent } from './accee/accee.component';
import { ActiviteDetailsComponent } from './activite-details/activite-details.component';
import { ActiviteComponent } from './activite/activite.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BureauExecutifComponent } from './bureau-executif/bureau-executif.component';
import { BureauxComponent } from './bureaux/bureaux.component';
import { ConfigComponent } from './config/config.component';
import { ContactComponent } from './contact/contact.component';
import { DetailRecrutementComponent } from './detail-recrutement/detail-recrutement.component';
import { DeveloppementComponent } from './developpement/developpement.component';
import { FormationdetailsComponent } from './formationdetails/formationdetails.component';
import { GestionCommantaireComponent } from './gestion-commantaire/gestion-commantaire.component';
import { GestionMembreComponent } from './gestion-membre/gestion-membre.component';
import { GestionPagesComponent } from './gestion-pages/gestion-pages.component';
import { HistoireComponent } from './histoire/histoire.component';
import { HistoriqueUserComponent } from './historique-user/historique-user.component';
import { HomeComponent } from './home/home.component';
import { InscrirDetailsComponent } from './inscrir-details/inscrir-details.component';
import { ListCommantaireComponent } from './list-commantaire/list-commantaire.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { ListeInscrirFormationComponent } from './liste-inscrir-formation/liste-inscrir-formation.component';
import { ListerecrutementComponent } from './listerecrutement/listerecrutement.component';
import { LoginComponent } from './login/login.component';
import { MediaComponent } from './media/media.component';
import { ModifAceeComponent } from './modif-acee/modif-acee.component';
import { ModifMediaComponent } from './modif-media/modif-media.component';
import { ModifPartenairComponent } from './modif-partenair/modif-partenair.component';
import { ModifdeveloppementComponent } from './modifdeveloppement/modifdeveloppement.component';
import { ModifformationComponent } from './modifformation/modifformation.component';
import { ModifierAdhesionComponent } from './modifier-adhesion/modifier-adhesion.component';
import { ModifierHistoriqueComponent } from './modifier-historique/modifier-historique.component';
import { ModifierHomeComponent } from './modifier-home/modifier-home.component';

import { ModifierPrsntationComponent } from './modifier-prsntation/modifier-prsntation.component';
import { Modifpresentation2Component } from './modifpresentation2/modifpresentation2.component';

import { PartenaireComponent } from './partenaire/partenaire.component';
import { PayementComponent } from './payement/payement.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProfileMembreComponent } from './profile-membre/profile-membre.component';
import { ProjetComponent } from './projet/projet.component';
import { RecrutementComponent } from './recrutement/recrutement.component';

const routes: Routes = [
  {path:'https://jcisidimansour.tn/contact',component:ContactComponent},{
  path:'',component:HomeComponent
},{path:'home',component:HomeComponent},{

  path:'adhesion',component:AdhesionComponent
}
,{
  path:'histoire',component:HistoireComponent
},{

path:'https://jcisidimansour.tn/presentation',component:PresentationComponent
}
,{
  path:'https://jcisidimansour.tn/formationdetails/:id',component:FormationdetailsComponent
}
,{
  path:'https://jcisidimansour.tn/activite',component:ActiviteComponent
},
{
  path:'https://jcisidimansour.tn/listeInscrir',component:ListeInscrirFormationComponent
},
{
  path:'https://jcisidimansour.tn/inscrirDetails/:id',component:InscrirDetailsComponent
}
,{
  path:'https://jcisidimansour.tn/media',component:MediaComponent
},{

  path:'partenaire',component:PartenaireComponent
},{
  path:'https://jcisidimansour.tn/login',component:LoginComponent
},
{
  path:'https://jcisidimansour.tn/gestionCommantaire',component:GestionCommantaireComponent
},
{
path:"https://jcisidimansour.tn/listecommantaire/:id",component:ListCommantaireComponent

}
,
{
  path:'https://jcisidimansour.tn/developpement',component:DeveloppementComponent
}
,{
  path:'https://jcisidimansour.tn/modifDeveloppement',component:ModifdeveloppementComponent
}

,{

  path:'https://jcisidimansour.tn/dashoardAdmin',component:AdmindashboardComponent
},
  {
    path:'https://jcisidimansour.tn/gestionMembre',component:GestionMembreComponent
  
},{
  path:'https://jcisidimansour.tn/page',component:GestionPagesComponent
},{
  path:'https://jcisidimansour.tn/modifieHome',component:ModifierHomeComponent
},{
  path:'https://jcisidimansour.tn/modifierAdhesion',component:ModifierAdhesionComponent
},{
  path:'https://jcisidimansour.tn/modiPresentation',component:ModifierPrsntationComponent
},{
  path:'https://jcisidimansour.tn/modifierPartenair',component:ModifPartenairComponent
},
{path:"bureau",component:BureauExecutifComponent}
,{
  path:'https://jcisidimansour.tn/modifMedia',component:ModifMediaComponent
},{
  path:'https://jcisidimansour.tn/modifhistoire',component: ModifierHistoriqueComponent
},{
  path:'https://jcisidimansour.tn/gestionpage',component:GestionPagesComponent
},

{path:'https://jcisidimansour.tn/projet',component:ProjetComponent},
{path:'https://jcisidimansour.tn/projetDetails/:id',component:ActiviteDetailsComponent},
{path:'https://jcisidimansour.tn/modifformation',component:ModifformationComponent},{
  path:'https://jcisidimansour.tn/recrutement',component:RecrutementComponent
},{
  path:'https://jcisidimansour.tn/recrutementdetail/:id',component:DetailRecrutementComponent
},
{
  path:'https://jcisidimansour.tn/modiferPresentation',component:Modifpresentation2Component
},
{
path:'https://jcisidimansour.tn/listeRecrutement',component:ListerecrutementComponent

},{
  path:'https://jcisidimansour.tn/accee',component:AcceeComponent
},{
  path:'https://jcisidimansour.tn/modifAccee/:poste',component:ModifAceeComponent
},{
  path:'https://jcisidimansour.tn/historiqueU',component:HistoriqueUserComponent
},{
  path:'https://jcisidimansour.tn/listeContact',component:ListeContactComponent
},{
  path:'https://jcisidimansour.tn/config',component:ConfigComponent
},
{path:'https://jcisidimansour.tn/profile',component:ProfileMembreComponent},{
  path:'https://jcisidimansour.tn/bureaux',component:BureauxComponent
},{
  path:'https://jcisidimansour.tn/payement',component:PayementComponent
}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
