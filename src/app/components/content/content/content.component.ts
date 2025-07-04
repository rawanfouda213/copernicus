import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

interface Collection {
  label: string;
  isToggleDisabled: boolean;
}
interface TimeRange {
  label: string;
  date: Date;
  hours: string;
  minutes: string;
}
interface DateTab {
  title: string;
  class: string;
  path: string;
}
interface Month {
  name: string;
  checked: boolean;
}
interface CollectionButton {
  text: string;
  title: string;
  isSelected: boolean;
}

@Component({
  selector: 'app-content',
  imports: [CommonModule, FormsModule, MatDatepickerModule, MatInputModule, MatNativeDateModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  activeTab: string = 'visualize'; 
  searchQuery: string = '';
  isDatePanelExpanded: boolean = true;
  isThemePanelExpanded: boolean = true;
  isCollectionPanelExpanded: boolean = true;

  themes = ['Default', 'Dark', 'Light'];
  selectedTheme: string = 'Default';
  satellites = ['Sentinel-1', 'Sentinel-2', 'Landsat-8'];
  selectedSatellite: string = 'Sentinel-1'; 

  selectedTabTitle: string = 'Single';
  showLayerSelection: boolean = false;
  isFilterByMonths: boolean = false;

  orders = ['Layer default', 'Most recent', 'Least recent'];
  selectedOrder: string = 'Layer default';

  collections: Collection[] = [
    { label: 'SENTINEL-1', isToggleDisabled: false },
    { label: 'SENTINEL-2', isToggleDisabled: false },
    { label: 'SENTINEL-3', isToggleDisabled: false },
    { label: 'SENTINEL-5P', isToggleDisabled: false },
    { label: 'SENTINEL-6', isToggleDisabled: true },
    { label: 'CCM Optical', isToggleDisabled: false },
    { label: 'CCM DEM', isToggleDisabled: false },
    { label: 'CCM SAR', isToggleDisabled: false },
    { label: 'GLOBAL-MOSAICS', isToggleDisabled: true },
    { label: 'CLMS Land Cover and Land Use Mapping', isToggleDisabled: false },
    { label: 'CLMS Bio-geophysical Parameters', isToggleDisabled: false }
  ];
  timeRanges: TimeRange[] = [
    { label: 'From', date: new Date('2025-05-18'), hours: '00', minutes: '00' },
    { label: 'Until', date: new Date('2025-06-18'), hours: '23', minutes: '59' }
  ];
  dateTabs: DateTab[] = [
    {
      title: 'Single date',
      class: 'single-mode-svg active',
      path: 'M24.9996 9.29237C24.9996 8.73642 24.719 8.46222 24.1524 8.46136C23.525 8.46041 22.8975 8.45503 22.2702 8.46461C22.0832 8.46747 22.0241 8.39715 22.0321 8.22528C22.0401 8.05318 22.0356 7.88031 22.0313 7.7079C22.0227 7.35938 21.8072 7.07434 21.4577 7.03191C21.1352 6.99248 20.8092 6.98963 20.486 7.0234C20.1003 7.06478 19.8872 7.33454 19.8718 7.72087C19.865 7.89314 19.8631 8.06599 19.8689 8.23824C19.8744 8.40256 19.8136 8.46595 19.6372 8.46445C18.7504 8.45689 17.8635 8.4611 16.9767 8.46111C15.7821 8.46112 14.5876 8.46102 13.393 8.46082C13.1496 8.46071 13.1438 8.45456 13.139 8.20854C13.1355 8.03016 13.1417 7.85132 13.131 7.67343C13.1108 7.33649 12.9004 7.07244 12.5613 7.03222C12.2388 6.9927 11.9128 6.98952 11.5895 7.02276C11.198 7.06528 10.9806 7.34778 10.9743 7.73738C10.9716 7.90388 10.9663 8.07077 10.9743 8.23692C10.9824 8.40491 10.9168 8.46617 10.7426 8.464C10.1152 8.45621 9.48747 8.47249 8.8604 8.45748C8.3775 8.44592 7.99473 8.73523 8.00005 9.30386C8.01753 11.1714 8.00653 13.0392 8.00653 14.907C8.00653 17.8334 8.00849 20.7599 8.01241 23.6864C8.01344 23.8681 8.06081 24.0468 8.15016 24.2058C8.28785 24.4399 8.53555 24.5004 8.80771 24.5C11.3718 24.4961 13.9358 24.4954 16.4998 24.4978C19.0579 24.4978 21.6159 24.4977 24.1739 24.4975C24.7297 24.4973 24.9996 24.2343 24.9996 23.6928C25.0001 18.8927 25.0001 14.0925 24.9996 9.29237ZM17.5775 21.0411H15.9188V17.1634C15.6748 17.3493 15.414 17.5127 15.1397 17.6516C14.8356 17.7963 14.5198 17.9158 14.1956 18.0088V16.6832C14.7538 16.5059 15.1873 16.2929 15.496 16.0441C15.805 15.795 16.0527 15.4802 16.2207 15.1233H17.5775L17.5775 21.0411ZM24.3036 11.944C24.3042 12.0748 24.2505 12.1296 24.123 12.1274C24.0506 12.1261 23.9782 12.1292 23.9058 12.1292C21.4385 12.1293 18.9711 12.1293 16.5038 12.1293C14.0183 12.1293 11.5329 12.1292 9.04741 12.1291C8.70416 12.1291 8.70404 12.1284 8.70404 11.785C8.70402 10.9821 8.70786 10.1791 8.70116 9.37622C8.69976 9.20779 8.75345 9.14446 8.92778 9.14648C9.53096 9.15348 10.1342 9.15354 10.7375 9.14668C10.9065 9.14495 10.9814 9.20167 10.9745 9.3733C10.9667 9.56327 10.9695 9.75404 10.9766 9.94414C10.9821 10.1185 11.0548 10.2843 11.1799 10.4077C11.3049 10.5311 11.473 10.6028 11.6499 10.6083C11.9151 10.6161 12.1809 10.615 12.4461 10.6088C12.6201 10.607 12.787 10.5406 12.9134 10.4228C13.0398 10.305 13.1165 10.1445 13.1281 9.97337C13.1421 9.78392 13.1348 9.59299 13.1392 9.40277C13.1448 9.16403 13.1583 9.14942 13.3982 9.14929C14.8882 9.14848 16.3783 9.1483 17.8684 9.14873C18.4535 9.14873 19.0388 9.15451 19.6238 9.14567C19.8061 9.14292 19.8736 9.20894 19.869 9.38283C19.8639 9.57882 19.864 9.7758 19.878 9.97122C19.8891 10.1423 19.9653 10.303 20.0913 10.4212C20.2174 10.5394 20.384 10.6064 20.5579 10.6088C20.8232 10.6151 21.0889 10.6159 21.3541 10.6084C21.531 10.6034 21.6994 10.5321 21.8249 10.4091C21.9504 10.2861 22.0236 10.1205 22.0296 9.94615C22.0375 9.74419 22.0363 9.54175 22.0341 9.33958C22.0326 9.20452 22.0925 9.14774 22.2306 9.14841C22.858 9.15149 23.4854 9.15153 24.1128 9.14856C24.2505 9.14791 24.3045 9.20001 24.3039 9.33892C24.2999 10.2073 24.2998 11.0756 24.3036 11.944Z'
    },
    {
      title: 'Mosaic',
      class: 'mosaic-mode-svg',
      path: 'M25.9957 16.1848C25.9114 13.7169 24.87 11.3786 23.0917 9.66443C21.3135 7.95029 18.9379 6.99477 16.4675 7.00002C11.2459 6.99517 6.98634 11.2947 7.00003 16.5091C7.01375 21.7367 11.2966 26.0184 16.4934 25.9999C17.7673 25.9965 19.0275 25.738 20.1996 25.2395C21.3718 24.741 22.4321 24.0128 23.3179 23.0978C24.2037 22.1828 24.8971 21.0996 25.357 19.9123C25.8169 18.7249 26.0341 17.4575 25.9957 16.1848ZM21.4064 13.6616C20.6983 14.381 19.9991 15.0914 19.3194 15.7819C18.6086 15.0826 17.8994 14.3848 17.2133 13.7097C17.9001 13.0001 18.5935 12.2838 19.2848 11.5696C20.0183 12.2929 20.7206 12.9853 21.4064 13.6616ZM15.7983 13.6973C15.1054 14.4002 14.4051 15.1105 13.7064 15.8192C12.9944 15.11 12.2931 14.4115 11.6102 13.7312C12.3119 13.0302 13.0226 12.3202 13.7182 11.6253C14.3999 12.3044 15.1061 13.0078 15.7983 13.6973ZM11.6003 19.2996C12.3082 18.5982 13.0158 17.8972 13.7042 17.2152L15.7896 19.2876C15.1061 19.9763 14.4039 20.684 13.717 21.3762C13.0106 20.6831 12.2992 19.9852 11.6003 19.2996ZM17.2061 19.3015C17.9027 18.611 18.6141 17.9059 19.3024 17.2236C19.9755 17.8912 20.6885 18.5983 21.3934 19.2974C20.7029 20.0001 20.0042 20.7111 19.3134 21.4142C18.5971 20.696 17.8923 19.9894 17.2061 19.3015ZM20.5861 8.89365C20.1511 9.33001 19.7118 9.77064 19.2898 10.194C18.52 9.43126 17.7334 8.65182 16.9542 7.87973C17.5341 7.73231 19.8617 8.38329 20.5861 8.89365ZM16.6561 8.89501L16.558 8.80545L16.5652 8.79818C16.5944 8.82911 16.6254 8.86223 16.6561 8.89501ZM15.9428 7.8441C15.1837 8.60251 14.3961 9.38945 13.6239 10.161C13.2433 9.78308 12.8129 9.35556 12.371 8.91666C13.4872 8.26422 14.7186 7.96701 15.9428 7.8441ZM8.8885 12.3939C9.33581 12.8435 9.77624 13.2861 10.2024 13.7144C9.42173 14.4892 8.62531 15.2796 7.84665 16.0524C7.93874 14.7798 8.25297 13.5344 8.8885 12.3939ZM10.1615 19.3057C9.76344 19.7108 9.33295 20.1488 8.89099 20.5986C8.25196 19.4584 7.95142 18.2336 7.83792 16.9859C8.60785 17.7546 9.38986 18.5354 10.1615 19.3057ZM12.3923 24.095C12.8458 23.6425 13.2773 23.2119 13.6781 22.812C14.4604 23.5798 15.2556 24.3603 16.0639 25.1536C14.7626 25.0398 13.5224 24.7372 12.3923 24.095ZM16.8538 25.1376C17.6794 24.3095 18.471 23.5154 19.2287 22.7554C19.7158 23.2249 20.1584 23.6516 20.6011 24.0785C19.9661 24.57 17.8797 25.1722 16.8538 25.1376ZM24.1137 20.588C23.6765 20.1464 23.2436 19.7092 22.8313 19.2928C23.5845 18.5401 24.3715 17.7537 25.1514 16.9743C25.0528 18.2357 24.7344 19.4624 24.1137 20.588ZM22.792 13.7031C23.2056 13.2836 23.6382 12.8449 24.0898 12.3868C24.7695 13.5396 25.0374 14.8076 25.1723 16.0824C24.3889 15.2993 23.5901 14.5009 22.792 13.7031Z'
    },
    {
      title: 'Time range',
      class: 'time-range-mode-svg',
      path: 'M24.9996 9.29237C24.9996 8.73642 24.719 8.46222 24.1524 8.46136C23.525 8.46041 22.8975 8.45503 22.2702 8.46461C22.0832 8.46747 22.0241 8.39715 22.0321 8.22528C22.0401 8.05318 22.0356 7.88031 22.0313 7.70791C22.0227 7.35938 21.8072 7.07434 21.4577 7.03191C21.1352 6.99248 20.8092 6.98963 20.486 7.0234C20.1003 7.06478 19.8872 7.33454 19.8718 7.72087C19.8649 7.89314 19.8631 8.06599 19.8689 8.23824C19.8744 8.40256 19.8136 8.46595 19.6372 8.46445C18.7504 8.45689 17.8635 8.4611 16.9767 8.46111C15.7821 8.46112 14.5876 8.46102 13.393 8.46082C13.1496 8.46071 13.1438 8.45456 13.139 8.20854C13.1355 8.03016 13.1417 7.85132 13.131 7.67343C13.1108 7.33649 12.9004 7.07244 12.5613 7.03222C12.2388 6.9927 11.9128 6.98952 11.5895 7.02276C11.198 7.06528 10.9806 7.34778 10.9743 7.73738C10.9716 7.90388 10.9663 8.07077 10.9743 8.23692C10.9824 8.40491 10.9168 8.46617 10.7426 8.464C10.1153 8.45621 9.48747 8.47249 8.8604 8.45748C8.3775 8.44592 7.99473 8.73523 8.00005 9.30386C8.01753 11.1714 8.00653 13.0392 8.00653 14.907C8.00653 17.8334 8.00849 20.7599 8.01241 23.6863C8.01344 23.8681 8.06081 24.0468 8.15016 24.2058C8.28784 24.4399 8.53555 24.5004 8.80771 24.5C11.3718 24.4961 13.9358 24.4954 16.4998 24.4978C19.0579 24.4978 21.6159 24.4977 24.1739 24.4975C24.7297 24.4973 24.9996 24.2343 24.9996 23.6928C25.0001 18.8927 25.0001 14.0925 24.9996 9.29237ZM22.0365 18.4541C21.2812 19.1897 20.5356 19.9351 19.7775 20.6679C19.6827 20.7623 19.5558 20.8186 19.4213 20.8261C19.3625 20.8133 19.3076 20.7869 19.2612 20.7489C19.2148 20.711 19.1783 20.6627 19.1547 20.6081C19.1412 20.5499 19.1406 20.4896 19.153 20.4312C19.1654 20.3728 19.1904 20.3178 19.2264 20.2698C19.4056 20.069 19.595 19.8771 19.7938 19.695C20.0751 19.4172 20.3565 19.1395 20.638 18.862C20.6879 18.8126 20.7331 18.7588 20.8144 18.6697H12.1918C12.2745 18.7597 12.32 18.8135 12.3699 18.8629C12.8299 19.3177 13.293 19.7696 13.7503 20.2272C13.9738 20.4508 13.9066 20.7751 13.6178 20.8222C13.4897 20.8297 13.3639 20.7868 13.2679 20.7029C12.9815 20.4485 12.7166 20.1704 12.4436 19.9013C11.9487 19.4135 11.4564 18.9231 10.9572 18.4397C10.8497 18.3356 10.8513 18.269 10.9579 18.165C11.7123 17.4285 12.4612 16.6864 13.2124 15.9467C13.2537 15.9035 13.2996 15.8646 13.3492 15.8309C13.4149 15.7872 13.4939 15.7674 13.5727 15.7746C13.6516 15.7818 13.7255 15.8157 13.7819 15.8706C13.8407 15.9274 13.8762 16.0036 13.8819 16.0845C13.8875 16.1655 13.8629 16.2457 13.8126 16.31C13.7684 16.3665 13.7197 16.4194 13.6671 16.4683C13.2325 16.8979 12.7977 17.3271 12.3626 17.7561C12.314 17.8043 12.2724 17.8593 12.2021 17.9403H20.794C20.7511 17.88 20.7049 17.822 20.6556 17.7667C20.2175 17.3322 19.7785 16.8987 19.3386 16.4661C19.2856 16.4175 19.2368 16.3646 19.1928 16.308C19.1445 16.2495 19.1188 16.176 19.1204 16.1006C19.122 16.0252 19.1507 15.9528 19.2015 15.8964C19.2505 15.8346 19.3205 15.7924 19.3986 15.7776C19.4767 15.7628 19.5576 15.7764 19.6263 15.8159C19.6932 15.8558 19.7543 15.9046 19.8078 15.9609C20.5511 16.6915 21.2906 17.4261 22.0378 18.1528C22.1581 18.2699 22.1543 18.3395 22.0365 18.4541ZM24.3037 11.944C24.3042 12.0748 24.2505 12.1296 24.123 12.1274C24.0506 12.1261 23.9782 12.1292 23.9058 12.1292C21.4385 12.1293 18.9711 12.1293 16.5038 12.1293C14.0183 12.1293 11.5329 12.1292 9.04741 12.1292C8.70416 12.1291 8.70405 12.1284 8.70404 11.785C8.70402 10.9821 8.70785 10.1791 8.70116 9.37622C8.69976 9.2078 8.75345 9.14446 8.92778 9.14649C9.53096 9.15348 10.1342 9.15354 10.7375 9.14668C10.9065 9.14495 10.9814 9.20167 10.9745 9.3733C10.9667 9.56328 10.9695 9.75404 10.9766 9.94414C10.9821 10.1185 11.0548 10.2843 11.1799 10.4077C11.3049 10.5311 11.473 10.6028 11.6499 10.6083C11.9151 10.6161 12.1809 10.615 12.4461 10.6088C12.6201 10.607 12.787 10.5406 12.9134 10.4228C13.0398 10.305 13.1165 10.1445 13.1281 9.97337C13.1421 9.78393 13.1348 9.59299 13.1392 9.40277C13.1448 9.16403 13.1583 9.14943 13.3982 9.1493C14.8882 9.14849 16.3783 9.1483 17.8684 9.14873C18.4535 9.14873 19.0388 9.15451 19.6238 9.14567C19.8061 9.14292 19.8736 9.20895 19.869 9.38283C19.8639 9.57882 19.864 9.7758 19.878 9.97122C19.8891 10.1423 19.9653 10.303 20.0913 10.4212C20.2174 10.5394 20.384 10.6064 20.5579 10.6088C20.8232 10.6151 21.0889 10.6159 21.3541 10.6084C21.531 10.6034 21.6994 10.5321 21.8249 10.4091C21.9504 10.2861 22.0236 10.1205 22.0296 9.94615C22.0375 9.74419 22.0363 9.54175 22.0341 9.33958C22.0326 9.20452 22.0925 9.14774 22.2306 9.14841C22.858 9.15149 23.4854 9.15153 24.1128 9.14856C24.2505 9.14791 24.3045 9.20002 24.3039 9.33892C24.2999 10.2073 24.2998 11.0756 24.3037 11.944Z'
    }
  ];

  acquisitionModes: CollectionButton[] = [
    {
      text: 'SM - Stripmap Mode 3.5m x 3.5m',
      title: 'Stripmap Mode',
      isSelected: true
    },
    {
      text: 'IW - Interferometric Wide Swath 10m x 10m',
      title: 'Interferometric Wide Swath',
      isSelected: false
    },
    {
      text: 'EW - Extra-Wide Swath 40m x 40m',
      title: 'Extra-Wide Swath',
      isSelected: false
    }
  ];

  polarizations: CollectionButton[] = [
    {
      text: 'VV',
      title: 'Vertical-Vertical Polarization',
      isSelected: false
    },
    {
      text: 'VV+VH',
      title: 'Vertical-Vertical + Vertical-Horizontal Polarization',
      isSelected: true
    },
    {
      text: 'HH',
      title: 'Horizontal-Horizontal Polarization',
      isSelected: false
    },
    {
      text: 'HH+HV',
      title: 'Horizontal-Horizontal + Horizontal-Vertical Polarization',
      isSelected: false
    }
  ];

  orbitDirections = [
    { text: 'Ascending', title: 'Ascending Orbit', isSelected: true },
    { text: 'Descending', title: 'Descending Orbit', isSelected: true }
  ];
  layers: { title: string, description: string, previewUrl: string, isCustom: boolean }[] = [
    {
      title: 'RGB ratio',
      description: 'Orthorectified',
      previewUrl: '/assets/images/DEFAULT-THEME-f1c110-8_RGB-RATIO.png',
      isCustom: false
    },
    {
      title: 'SAR urban',
      description: 'Orthorectified',
      previewUrl: '/assets/images/DEFAULT-THEME-f1c110-9_SAR-URBAN.png',
      isCustom: false
    },
    {
      title: 'Enhanced visualization',
      description: 'Orthorectified',
      previewUrl: '/assets/images/DEFAULT-THEME-f1c110-ENHANCED-VISUALIZATION-ORTHORECTIFIED.png',
      isCustom: false
    },
    {
      title: 'VH - decibel gamma0',
      description: 'Orthorectified',
      previewUrl: '/assets/images/DEFAULT-THEME-f1c110-SM-DV-VH-DECIBEL-GAMMA0-ORTHORECTIFIED.png',
      isCustom: false
    },
    {
      title: 'VH - linear gamma0',
      description: 'Orthorectified',
      previewUrl: '/assets/images/DEFAULT-THEME-f1c110-SM-DV-VH-LINEAR-GAMMA0-ORTHORECTIFIED.png',
      isCustom: false
    },
    {
      title: 'VV - decibel gamma0',
      description: 'Orthorectified',
      previewUrl: '/assets/images/DEFAULT-THEME-f1c110-SM-DV-VV-DECIBEL-GAMMA0-ORTHORECTIFIED.png',
      isCustom: false
    },
    {
      title: 'VV - linear gamma0',
      description: 'Orthorectified',
      previewUrl: '/assets/images/DEFAULT-THEME-f1c110-SM-DV-VV-LINEAR-GAMMA0-ORTHORECTIFIED.png',
      isCustom: false
    },
    {
      title: 'Custom',
      description: 'Create custom visualisation',
      previewUrl: '',
      isCustom: true
    }
  ];

  months: Month[] = [
    { name: 'Jan', checked: true },
    { name: 'Feb', checked: true },
    { name: 'Mar', checked: true },
    { name: 'Apr', checked: true },
    { name: 'May', checked: true },
    { name: 'Jun', checked: true },
    { name: 'Jul', checked: true },
    { name: 'Aug', checked: true },
    { name: 'Sep', checked: true },
    { name: 'Oct', checked: true },
    { name: 'Nov', checked: true },
    { name: 'Dec', checked: true }
  ];

  selectedLayerTitle: string = this.layers[0].title;
  selectedDate: Date | null = null; 
  setLatestDate() {
    this.selectedDate = new Date(); 
  }

  onDateSelect(event: any) {
    if (event instanceof Date) {
      this.selectedDate = event;
    }
  }

  onDateChange(event: MatDatepickerInputEvent<any>) {
    this.selectedDate = event.value;
  }

  changeDate(days: number) {
    if (this.selectedDate) {
      const newDate = new Date(this.selectedDate);
      newDate.setDate(newDate.getDate() + days);
      this.selectedDate = newDate;
    }
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  performSearch() {
    console.log('Searching for:', this.searchQuery);
  }

  toggleDatePanel(): void {
    this.isDatePanelExpanded = !this.isDatePanelExpanded;
  }
  toggleThemePanel() {
    this.isThemePanelExpanded = !this.isThemePanelExpanded;
  }
  toggleCollectionPanel() {
    this.isCollectionPanelExpanded = !this.isCollectionPanelExpanded;
  }
  getCollapsedTitle(): string {
    const collection = this.selectedSatellite;
    const selectedMode = this.acquisitionModes.find(m => m.isSelected)?.text.split(' - ')[0] || '';
    const selectedPols = this.polarizations.filter(p => p.isSelected).map(p => p.text);
    const polarization = selectedPols.length > 0 ? selectedPols.join('+') : '';
    const selectedDirections = this.orbitDirections.filter(d => d.isSelected).map(d => d.text);
    const parts = [selectedMode, polarization].filter(Boolean);
    return parts.length > 0 ? `${collection} ${parts.join(' ')}` : collection;
  }
  selectSingleItem(item: any, array: any[]) {
    array.forEach(i => i.isSelected = false);
    item.isSelected = true;
  }
  toggleOrbitDirectionIndependent(direction: any) {
    direction.isSelected = !direction.isSelected;
  }
  selectTab(tab: DateTab) {
    this.dateTabs.forEach(t => {
      t.class = t.class.replace(' active', '');
    });
    tab.class = tab.class + ' active';
    this.selectedTabTitle = tab.title.replace(' date', '');

    if (tab.title === 'Mosaic') {
      this.selectedDate = new Date();
      this.isThemePanelExpanded = false;
      this.isCollectionPanelExpanded = false;
      this.showLayerSelection = true;
    } else if (tab.title === 'Time range') {
      this.isThemePanelExpanded = false;
      this.isCollectionPanelExpanded = false;
      this.timeRanges[0].date = new Date('2025-05-18');
      this.timeRanges[1].date = new Date('2025-06-18');
    } else if (tab.title === 'Single date') {
      this.isThemePanelExpanded = true;
      this.isCollectionPanelExpanded = true;
    }
  }
  selectLayer(title: string): void {
    this.selectedLayerTitle = title; 
  }
  changeHours(index: number, increment: number): void {
    let hours = parseInt(this.timeRanges[index].hours) + increment;
    if (hours > 23) hours = 0;
    if (hours < 0) hours = 23;
    this.timeRanges[index].hours = hours.toString().padStart(2, '0'); 
  }
  changeMinutes(index: number, increment: number): void {
    let minutes = parseInt(this.timeRanges[index].minutes) + increment;
    if (minutes > 59) minutes = 0;
    if (minutes < 0) minutes = 59;
    this.timeRanges[index].minutes = minutes.toString().padStart(2, '0'); 
  }
  changeSearchDate(index: number, days: number): void {
    const newDate = new Date(this.timeRanges[index].date);
    newDate.setDate(newDate.getDate() + days);
    this.timeRanges[index].date = newDate;
  }
  onSearchDateChange(index: number, event: any): void {
    this.timeRanges[index].date = event.value;
  }
  toggleFilterByMonths(): void {
    this.isFilterByMonths = !this.isFilterByMonths;
  }

  toggleMonth(index: number): void {
    this.months[index].checked = !this.months[index].checked;
  }

  search(): void {
    const selectedMonths = this.months.filter(month => month.checked).map(month => month.name);
    console.log('Selected Months:', selectedMonths);
    console.log('Time Range:', this.timeRanges);
  }
}