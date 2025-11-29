import { Routes } from '@angular/router';
import { Simview } from './views/simview/simview';

export const routes: Routes = [    
    { path: '', redirectTo: '/simView', pathMatch: 'full' }, 
    { path: 'simView', component: Simview }, 
];
