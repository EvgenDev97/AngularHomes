import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule, ReactiveFormsModule],
  template: `
    <article class="flex" >
      <div class="data">
      <img
      class="listing-photo"
      [src]="housingLocation?.photo"
      alt="Exterior photo of {{ housingLocation?.name }}"
      />
        <section class="listing-description">
      <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
      <p class="listing-location">
        {{ housingLocation?.city }}, {{ housingLocation?.state }}
      </p>
        </section>
      </div>
      <div class="data" >
        <section class="listing-features">
          <h2 class="section-heading">About this housing location</h2>
          <ul>
            <li>Units available: {{ housingLocation?.availableUnits }}</li>
            <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
            <li>
              Does this location have laundry: {{ housingLocation?.laundry }}
            </li>
          </ul>
        </section>
        <section class="listing-apply">
        <h2>Apply now to live here</h2>
        <form [formGroup]="applyForm" class="form" (submit)="submitApplication()">
          <label  for="first-name" >First Name</label>
          <input class="form" id="first-name" type="text" formControlName="firstName" />

          <label for="last-name">Last Name</label>
          <input  class="form" id="last-name" type="text" formControlName="lastName" />

          <label for="email">Email</label>
          <input class="form" id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
      </div>

      
    </article>
  `,
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  // Этот код предоставляет DetailsComponentдоступ к ActivatedRouteфункции маршрутизатора,
  // которая позволяет вам получить доступ к данным о текущем маршруте.
  // В коде constructorкод преобразует idпараметр, полученный по маршруту, из строки в число.
  // https://angular.io/api/router/ActivatedRoute
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;

  // В Angular FormGroupи FormControl— это типы, позволяющие создавать формы.
  //  Тип FormControlможет предоставлять значение по умолчанию и формировать данные формы.
  //   В этом примере firstNameэто a string, а значение по умолчанию — пустая строка.

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
