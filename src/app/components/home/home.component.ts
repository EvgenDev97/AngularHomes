import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../../housinglocation';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HousingLocationComponent],
  template: ` <p class="home">
  Homes
  </p>
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section>
      <app-housing-location></app-housing-location>
    </section>
    `,



  styleUrl: './home.component.scss'
})
export class HomeComponent {
  baseUrl = 'https://angular.io/assets/images/tutorials/faa'
  housingLocation: Housinglocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }
}
