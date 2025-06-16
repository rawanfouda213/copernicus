import { Component } from '@angular/core';
import { ToolsPanelComponent } from "../../tools-panel/tools-panel/tools-panel.component";
import { MapComponent } from "../../map/map/map.component";

@Component({
  selector: 'app-home',
  imports: [ToolsPanelComponent, MapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
