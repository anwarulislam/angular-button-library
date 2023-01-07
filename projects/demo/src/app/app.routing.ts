import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'button',
    pathMatch: 'full'
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then(m => m.ButtonModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
