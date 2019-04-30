import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveComponent } from './live/live.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  {
    path: 'live', component: LiveComponent
  },
  {
    path: '',
    redirectTo: '/live',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/live',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
