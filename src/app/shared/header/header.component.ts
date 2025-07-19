import { Component, OnInit } from '@angular/core';
import {
  IonButtons,
  IonButton,
  IonToolbar,
  IonHeader,
  IonIcon,
  IonImg,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonButtons, IonButton, IonToolbar, IonHeader, IonIcon, IonImg],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  openMenu() {
    
  }
}
