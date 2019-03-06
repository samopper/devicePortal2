import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { LiveComponent } from './live/live.component';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  {
    path: 'live', component: LiveComponent
  },
  {path: 'login', component: LoginComponent},
  {
    path: 'settings', component: SettingsComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
