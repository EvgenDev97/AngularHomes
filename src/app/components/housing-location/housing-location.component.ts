import { Component, Input} from '@angular/core';
import { Housinglocation } from '../../housinglocation';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <p class="result">
      housing-location works!
    </p>
  `,
  styleUrl: './housing-location.component.scss'
})
// You have to add the ! because the input is expecting the value to be passed. In this case, there is no default value
export class HousingLocationComponent {
  @Input() housingLocation!:Housinglocation
}
