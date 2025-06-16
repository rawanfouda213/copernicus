import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header/header.component";
import { ContentComponent } from "../../content/content/content.component";
import { FooterComponent } from "../../footer/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tools-panel',
  imports: [HeaderComponent, ContentComponent, FooterComponent, CommonModule],
  templateUrl: './tools-panel.component.html',
  styleUrl: './tools-panel.component.scss'
})
export class ToolsPanelComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
