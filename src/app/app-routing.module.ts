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
  {path:'contact',component:ContactComponent},{
  path:'',component:HomeComponent
},{path:'home',component:HomeComponent},{

  path:'adhesion',component:AdhesionComponent
}
,{
  path:'histoire',component:HistoireComponent
},{

path:'presentation',component:PresentationComponent
}
,{
  path:'formationdetails/:id',component:FormationdetailsComponent
}
,{
  path:'activite',component:ActiviteComponent
},
{
  path:'listeInscrir',component:ListeInscrirFormationComponent
},
{
  path:'inscrirDetails/:id',component:InscrirDetailsComponent
}
,{
  path:'media',component:MediaComponent
},{

  path:'partenaire',component:PartenaireComponent
},{
  path:'login',component:LoginComponent
},
{
  path:'gestionCommantaire',component:GestionCommantaireComponent
},
{
path:"listecommantaire/:id",component:ListCommantaireComponent

}
,
{
  path:'developpement',component:DeveloppementComponent
}
,{
  path:'modifDeveloppement',component:ModifdeveloppementComponent
}

,{

  path:'dashoardAdmin',component:AdmindashboardComponent
},
  {
    path:'gestionMembre',component:GestionMembreComponent
  
},{
  path:'page',component:GestionPagesComponent
},{
  path:'modifieHome',component:ModifierHomeComponent
},{
  path:'modifierAdhesion',component:ModifierAdhesionComponent
},{
  path:'modiPresentation',component:ModifierPrsntationComponent
},{
  path:'modifierPartenair',component:ModifPartenairComponent
},
{path:"bureau",component:BureauExecutifComponent}
,{
  path:'modifMedia',component:ModifMediaComponent
},{
  path:'modifhistoire',component: ModifierHistoriqueComponent
},{
  path:'gestionpage',component:GestionPagesComponent
},

{path:'projet',component:ProjetComponent},
{path:'projetDetails/:id',component:ActiviteDetailsComponent},
{path:'modifformation',component:ModifformationComponent},{
  path:'recrutement',component:RecrutementComponent
},{
  path:'recrutementdetail/:id',component:DetailRecrutementComponent
},
{
  path:'modiferPresentation',component:Modifpresentation2Component
},
{
path:'listeRecrutement',component:ListerecrutementComponent

},{
  path:'accee',component:AcceeComponent
},{
  path:'modifAccee/:poste',component:ModifAceeComponent
},{
  path:'historiqueU',component:HistoriqueUserComponent
},{
  path:'listeContact',component:ListeContactComponent
},{
  path:'config',component:ConfigComponent
},
{path:'profile',component:ProfileMembreComponent},{
  path:'bureaux',component:BureauxComponent
},{
  path:'payement',component:PayementComponent
}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
