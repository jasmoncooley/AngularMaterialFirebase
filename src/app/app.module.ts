// Modules 3rd party
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
         MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
         MatCardModule, MatTabsModule, MatIconModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

// Modules
import { BlocksModule } from './components/blocks/blocks.module';
import { AuthModule } from './pages/auth/auth.module';
import { BackgroundsModule } from './components/backgrounds/backgrounds.module';
import { ProfileModule } from './pages/profile/profile.module';
import { MiscModule } from './components/misc/misc.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { LivechatWidgetModule } from '@livechat/angular-widget';


// Shared
import {
  FooterComponent,
  HeaderComponent,
  UserService,
  AlertService,
  AuthGuardService,
  AuthService,
  WindowService
} from '@shared';

// Main
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { firebaseKeys } from './firebase.config';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/not-found/not-found.component';

// Components
import { EmailMeComponent } from './components/email-me/email-me.component';
import { ChatbotComponent } from './components/blocks/chatbot/chatbot.component';
import { FrontComponent } from './front/front.component';
import { ForumsComponentComponent } from './forums-component/forums-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ChatbotComponent,
    PageNotFoundComponent,
    EmailMeComponent,
    FrontComponent,
    ForumsComponentComponent
  ],
  imports: [
    BrowserModule, LivechatWidgetModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule, MatSnackBarModule,
    MatToolbarModule, MatDialogModule, MatSidenavModule, MatNativeDateModule,
    MatCardModule, MatTabsModule, MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    PipesModule,
    BlocksModule,
    AuthModule,
    AngularFireModule.initializeApp(firebaseKeys),
    AngularFireDatabaseModule,
    BackgroundsModule,
    ProfileModule,
    MiscModule,
    NgxAuthFirebaseUIModule.forRoot(firebaseKeys)
  ],
  providers: [
    UserService,
    AlertService,
    AuthGuardService,
    AuthService,
    WindowService,
    ChatbotComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
