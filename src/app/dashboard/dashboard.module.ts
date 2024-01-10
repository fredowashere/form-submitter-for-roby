import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavbarComponent } from './layout/navbar/navbar.component';
import { DashboardSidebarComponent } from './layout/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'this-is-my-first-form', pathMatch: 'full' },
      {
        path: 'this-is-my-first-form',
        loadChildren: () =>
          import('./features/forms/this-is-my-first-form')
            .then(m => m.ThisIsMyFirstFormModule)
      }
    ]
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
