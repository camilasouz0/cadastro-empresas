import { Component, OnInit } from '@angular/core';
import { CompaniesModule } from '../companies.module';
import { FormCompanyComponent } from '../form/form-company.component';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.scss',
  imports: [CompaniesModule, FormCompanyComponent],
  standalone: true
})
export class CreateCompanyComponent {

}
