import { Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { ImprintComponent } from './main/imprint/imprint.component';
import { ProjectDetailComponent } from './main/my-projects/project-detail/project-detail.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { DataSaveComponent } from './main/data-save/data-save.component';

export const routes: Routes = [
    { path: '' , component: MainComponent},
    { path: 'imprint', component : ImprintComponent},
    { path: 'data-save', component : DataSaveComponent},
    { path: 'project-details', component : ProjectDetailComponent},
    // { path: 'about-me-section', component : AboutMeComponent},
];
