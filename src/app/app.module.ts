import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import{ServiceAdminService} from './serviceAdmin/service-admin.service';
import{PageServiceService} from './../app/pages-service/page-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';

import {MatDialogModule} from '@angular/material/dialog';
import{ HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FormationComponent } from './formation/formation.component';
import { ActiviteComponent } from './activite/activite.component';
import { MediaComponent } from './media/media.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GestionMembreComponent } from './gestion-membre/gestion-membre.component';
import { GestionformationComponent } from './gestionformation/gestionformation.component';
import { GestionEvenementComponent } from './gestion-evenement/gestion-evenement.component';
import { GestionPagesComponent } from './gestion-pages/gestion-pages.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DialogdetailsComponent } from './dialogdetails/dialogdetails.component';
import { EditmembredialogComponent } from './editmembredialog/editmembredialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DeletemembredialogComponent } from './deletemembredialog/deletemembredialog.component';
import { AjouterMembredialogComponent } from './ajouter-membredialog/ajouter-membredialog.component';
import { BureauExecutifComponent } from './bureau-executif/bureau-executif.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import{LoginserviceService} from './loginservice/loginservice.service'

import { DashboardMembreComponent } from './dashboard-membre/dashboard-membre.component';
import { ModifierAdhesionComponent } from './modifier-adhesion/modifier-adhesion.component';
import { ModifierHomeComponent } from './modifier-home/modifier-home.component';
import { ModifierHistoriqueComponent } from './modifier-historique/modifier-historique.component';
import { ModifierPrsntationComponent } from './modifier-prsntation/modifier-prsntation.component';
import { ModifPartenairComponent } from './modif-partenair/modif-partenair.component';
import { ModifMediaComponent } from './modif-media/modif-media.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    AdhesionComponent,

    PresentationComponent,
    FormationComponent,
    ActiviteComponent,
    MediaComponent,
    PartenaireComponent,GestionEvenementComponent,
    LoginComponent,
    AdmindashboardComponent,
    GestionMembreComponent,
    GestionformationComponent,

    GestionPagesComponent,
    DialogdetailsComponent,
    EditmembredialogComponent,
    DeletemembredialogComponent,
    AjouterMembredialogComponent,
    BureauExecutifComponent,
    DashboardMembreComponent,
    ModifierAdhesionComponent,
    ModifierHomeComponent,
    ModifierHistoriqueComponent,
    ModifierPrsntationComponent,
    ModifPartenairComponent,
    ModifMediaComponent,
    
   

  ],
  imports: [FormsModule,MatTableModule,MatPaginatorModule,MatMenuModule,MatDialogModule,MatSelectModule,
    BrowserModule,MatButtonModule,MatDatepickerModule,HttpClientModule,
    AppRoutingModule,MatInputModule,MatBadgeModule,MatFormFieldModule,
    BrowserAnimationsModule,MatCardModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,ReactiveFormsModule
  ],
  providers: [ServiceAdminService,LoginserviceService,PageServiceService],
  bootstrap: [AppComponent],
entryComponents:[DialogdetailsComponent,EditmembredialogComponent,DeletemembredialogComponent,AjouterMembredialogComponent]
})
export class AppModule { }
