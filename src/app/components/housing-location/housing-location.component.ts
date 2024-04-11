import { Component, Input} from '@angular/core';
import { Housinglocation } from '../../housinglocation';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <div class="result">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    </div>
  `,
  styleUrl: './housing-location.component.scss'
})
// You have to add the ! because the input is expecting the value to be passed. In this case, there is no default value
export class HousingLocationComponent {
  @Input() housingLocation!:Housinglocation
}
