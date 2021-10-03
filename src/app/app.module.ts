import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {IvyGalleryModule} from 'angular-gallery';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { ToastrModule } from 'ngx-toastr';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import {AcceeServiceService} from './accee/accee-service.service';
import{ShareIconsModule} from 'ngx-sharebuttons/icons';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { YouTubePlayerModule } from "@angular/youtube-player";
import{ServiceAdminService} from './serviceAdmin/service-admin.service';
import{PageServiceService} from './../app/pages-service/page-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';

import {MatDialogModule} from '@angular/material/dialog';
import{ HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { PresentationComponent } from './presentation/presentation.component';
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
import { ActiviteDetailsComponent } from './activite-details/activite-details.component';
import { ProjetComponent } from './projet/projet.component';
import { HistoireComponent } from './histoire/histoire.component';
import { ModifformationComponent } from './modifformation/modifformation.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { ListerecrutementComponent } from './listerecrutement/listerecrutement.component';
import { DetailRecrutementComponent } from './detail-recrutement/detail-recrutement.component';
import { AcceeComponent } from './accee/accee.component';
import { ModifAceeComponent } from './modif-acee/modif-acee.component';
import { HistoriqueUserComponent } from './historique-user/historique-user.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { ConfigComponent } from './config/config.component';
import { ProfileMembreComponent } from './profile-membre/profile-membre.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterComponent } from './footer/footer.component';
import { FormationdetailsComponent } from './formationdetails/formationdetails.component';
import { Modifpresentation2Component } from './modifpresentation2/modifpresentation2.component';
import { DeveloppementComponent } from './developpement/developpement.component';
import { ModifdeveloppementComponent } from './modifdeveloppement/modifdeveloppement.component';
import { GestionCommantaireComponent } from './gestion-commantaire/gestion-commantaire.component';
import { ListCommantaireComponent } from './list-commantaire/list-commantaire.component';

import {MatChipInputEvent} from '@angular/material/chips';
import { ListeInscrirFormationComponent } from './liste-inscrir-formation/liste-inscrir-formation.component';
import { InscrirDetailsComponent } from './inscrir-details/inscrir-details.component';
import { BureauxComponent } from './bureaux/bureaux.component';
import { PayementComponent } from './payement/payement.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    AdhesionComponent,

    PresentationComponent,
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
    ActiviteDetailsComponent,
    ProjetComponent,
    HistoireComponent,
    ModifformationComponent,
    RecrutementComponent,
    ListerecrutementComponent,
    DetailRecrutementComponent,
    AcceeComponent,
    ModifAceeComponent,
    HistoriqueUserComponent,
    ListeContactComponent,
    ConfigComponent,
    ProfileMembreComponent,
    FooterComponent,
    FormationdetailsComponent,
    Modifpresentation2Component,
    DeveloppementComponent,
    ModifdeveloppementComponent,
    GestionCommantaireComponent,
    ListCommantaireComponent,
    ListeInscrirFormationComponent,
    InscrirDetailsComponent,
    BureauxComponent,
    PayementComponent,
    
   

  ],
  imports: [FormsModule,MatTableModule,MatPaginatorModule,MatMenuModule,MatDialogModule,MatSelectModule,YouTubePlayerModule ,
    BrowserModule,MatButtonModule,MatDatepickerModule,HttpClientModule,
    AppRoutingModule,MatInputModule,MatBadgeModule,MatFormFieldModule,
    BrowserAnimationsModule,MatCardModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,ReactiveFormsModule
   ,    ShareButtonsModule.withConfig({
     debug:true
   }),ShareIconsModule,IvyGalleryModule,ToastrModule.forRoot() ,MatRadioModule,MatCheckboxModule,MatChipsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ServiceAdminService,LoginserviceService,PageServiceService,AcceeServiceService],
  bootstrap: [AppComponent],
entryComponents:[DialogdetailsComponent,EditmembredialogComponent,DeletemembredialogComponent,AjouterMembredialogComponent]
})
export class AppModule { }
