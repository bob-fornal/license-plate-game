import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { NewTripComponent } from '../new-trip/new-trip.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newTripComponent = NewTripComponent;
  constructor() {}
}
