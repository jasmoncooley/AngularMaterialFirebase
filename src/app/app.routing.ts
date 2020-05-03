// Modules 3rd party
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ForumComponent } from 'src/app/pages/home/forum/forum.component';
// 404 page
import { PageNotFoundComponent } from './pages/not-found/not-found.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { FrontComponent } from './front/front.component';
//import { ForumComponent } from 'src/app/pages/home/forum/forum.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileSettingsComponent } from './pages/profile/profile-settings.component';
//import { MyTopicsComponent } from './components/authentication/my-topics/my-topics.component';
//import { MyRepliesComponent } from './components/authentication/my-replies/my-replies.component';

// Components
import { MiscComponent } from './components/misc/misc.component';

// Protected
import { AuthGuardService, User } from '@shared';

// Routing
const appRoutes: Routes = [

  // Public pages
  { path: '', redirectTo: '/front', pathMatch : 'full' },
  //{ path: '', component: ForumComponent },
  //{ path: 'mytopics', component: MyTopicsComponent},
  //{ path: 'myreplies', component: MyRepliesComponent},
  { path: 'home', component: HomeComponent },
  { path: 'front', component: FrontComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'misc', component: MiscComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: User },
  //{path: 'users/:userId/posts/:postId', component: ForumComponent},

  // Protected pages
  // { path: 'profile/:uid/:name', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'profile-settings', component: ProfileSettingsComponent, canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
