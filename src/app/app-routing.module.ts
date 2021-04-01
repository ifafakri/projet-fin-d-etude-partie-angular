import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiviteComponent } from './activite/activite.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BureauExecutifComponent } from './bureau-executif/bureau-executif.component';
import { ContactComponent } from './contact/contact.component';
import { FormationComponent } from './formation/formation.component';
import { GestionMembreComponent } from './gestion-membre/gestion-membre.component';
import { GestionPagesComponent } from './gestion-pages/gestion-pages.component';
import { HistoireComponent } from './histoire/histoire.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MediaComponent } from './media/media.component';
import { ModifMediaComponent } from './modif-media/modif-media.component';
import { ModifPartenairComponent } from './modif-partenair/modif-partenair.component';
import { ModifierAdhesionComponent } from './modifier-adhesion/modifier-adhesion.component';
import { ModifierHistoriqueComponent } from './modifier-historique/modifier-historique.component';
import { ModifierHomeComponent } from './modifier-home/modifier-home.component';

import { ModifierPrsntationComponent } from './modifier-prsntation/modifier-prsntation.component';

import { PartenaireComponent } from './partenaire/partenaire.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [{path:'contact',component:ContactComponent},{
  path:'',component:HomeComponent
},{path:'home',component:HomeComponent},{

  path:'adhesion',component:AdhesionComponent
}
,{
  path:'histoire',component:HistoireComponent
},{

path:'presentation',component:PresentationComponent
},{
  path:'formation',component:FormationComponent
}
,{
  path:'activite',component:ActiviteComponent
}
,{
  path:'media',component:MediaComponent
},{

  path:'partenaire',component:PartenaireComponent
},{
  path:'login',component:LoginComponent
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
}
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
