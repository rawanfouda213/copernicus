import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
interface Language {
  code: string;
  name: string;
  flag: string; // Placeholder for flag SVG or emoji
}

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Output() toggleSidebar = new EventEmitter<void>();
isDropdownOpen: boolean = false;
  selectedLanguage: Language = { code: 'en', name: 'English', flag: '🇬🇧' };
  languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' }
  ];

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
  toggleDropdown() {
    debugger
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(lang: Language) {
    this.selectedLanguage = lang;
    this.isDropdownOpen = false;
    // Add logic for language change if needed
    console.log('Selected language:', lang.name);
  }


}
