import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

          {path: 'home', loadComponent: () => import('./shared/pages/home/home.component').then(c=> c.HomeComponent)},
          {path: 'about', loadComponent: () => import('./shared/pages/about/about.component').then(c=> c.AboutComponent)},
          {path: 'projects', loadComponent: () => import('./shared/pages/projects/projects.component').then(c=> c.ProjectsComponent)},

          {path: 'contact', loadComponent: () => import('./shared/pages/contact/contact.component').then(c=> c.ContactComponent)},


   


    
  

   

];

