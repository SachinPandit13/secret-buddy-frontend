import { Component, OnInit, Input } from '@angular/core';
import {
  IonButtons,
  IonButton,
  IonToolbar,
  IonHeader,
  IonIcon,
  IonImg,
  IonTitle,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonButtons,
    IonButton,
    IonToolbar,
    IonHeader,
    IonIcon,
    IonImg,
    IonTitle,
  ],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  constructor() {}

  ngOnInit() {}

  openMenu() {}
}
