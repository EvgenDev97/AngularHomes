import { Component, inject } from '@angular/core';
import { HousingService } from '../../housing.service';
import { FormsModule } from '@angular/forms';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../../housinglocation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HousingLocationComponent,RouterOutlet],
  template: `<router-outlet>
  <div class="homePage">
  <p class="home">
  Homes
  </p>
    <section class="flex">
      <img src="../assets/icons8-home.svg" alt="logo" class="brandLogo">
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="grid">
      <app-housing-location *ngFor="let housingLocation of housingLocationList"
      [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  </div>
  </router-outlet>
    `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  baseUrl = 'https://angular.io/assets/images/tutorials/faa'
  housingLocationList: Housinglocation[] = []
  housingService:HousingService = inject(HousingService)
  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocation()
  }
   
}
