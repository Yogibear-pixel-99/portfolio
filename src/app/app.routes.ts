import { Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { ImprintComponent } from './main/imprint/imprint.component';
import { ProjectDetailComponent } from './main/my-projects/project-detail/project-detail.component';

export const routes: Routes = [
    { path: '' , component: MainComponent},
    { path: 'imprint', component : ImprintComponent},
    { path: 'project-details', component : ProjectDetailComponent},
];
