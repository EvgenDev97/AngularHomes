import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Housinglocation } from '../../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, HousingLocationComponent, RouterOutlet],
  template: `
    <div class="homePage">
      <section class="grid">
        <app-housing-location
          *ngFor="
            let housingLocation of this.housingService.filteredLocationList
          "
          [housingLocation]="housingLocation"
        >
        </app-housing-location>
      </section>
    </div>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(readonly housingService: HousingService) {}
}
