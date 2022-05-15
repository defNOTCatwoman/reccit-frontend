import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { CreateSubreccitComponent } from './subreccit/create-subreccit/create-subreccit.component';
import { ListSubreccitsComponent } from './subreccit/list-subreccits/list-subreccits.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { ViewSubreccitComponent } from './subreccit/view-subreccit/view-subreccit.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: 'list-subreccits', component: ListSubreccitsComponent },
  { path: 'view-subreccit/:id', component: ViewSubreccitComponent},
  { path: 'user-profile/:name', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'create-subreccit', component: CreateSubreccitComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }