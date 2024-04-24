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
  template: `
  <div class="homePage">
    <section class="grid">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList "
      [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  </div>
  
    `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  baseUrl = 'https://angular.io/assets/images/tutorials/faa'
  filteredLocationList:Housinglocation[]=[]

  housingLocationList: Housinglocation[] = []
  housingService:HousingService = inject(HousingService)
  constructor(private service: HousingService){
    this.housingLocationList = this.housingService.getAllHousingLocation()
    this.filteredLocationList = this.housingLocationList
  }
  filterResults(text:string){
    if(!text){
      this.filteredLocationList = this.housingLocationList
      return
    }
    this.filteredLocationList = this.housingLocationList
    .filter(housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()))
  }
  

}
