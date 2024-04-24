import { Component } from '@angular/core';

import { HomeComponent } from '../../home/home.component';
import { HousingService } from '../../../housing.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(readonly housingService: HousingService) {}
}
