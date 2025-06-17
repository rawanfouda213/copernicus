import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
activeTab: string = 'visualize'; 
  searchQuery: string = '';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  performSearch() {
    console.log('Searching for:', this.searchQuery);
  }
}
