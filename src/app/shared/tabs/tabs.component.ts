import { Component, OnInit } from '@angular/core';
import {
  IonTabs,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonImg
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [
    IonTabs,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonImg
  ],
})
export class TabsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
