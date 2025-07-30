import { Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { ImprintDeComponent } from './main/imprints/imprint-de/imprint-de.component';
import { ImprintEnComponent } from './main/imprints/imprint-en/imprint-en.component';

export const routes: Routes = [
    { path: '' , component: MainComponent},
    { path: 'imprint-de', component : ImprintDeComponent},
    { path: 'imprint-en', component : ImprintEnComponent},
];
