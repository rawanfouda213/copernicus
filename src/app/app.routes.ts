import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { MapComponent } from './components/map/map/map.component';
import { ToolsPanelComponent } from './components/tools-panel/tools-panel/tools-panel.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'tools', component: ToolsPanelComponent },
];
