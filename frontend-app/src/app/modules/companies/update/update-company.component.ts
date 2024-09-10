import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { ICompany } from '../../../Interfaces/ICompany';
import { ActivatedRoute } from '@angular/router';
import { FormCompanyComponent } from '../form/form-company.component';
import { CompaniesModule } from '../companies.module';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrl: './update-company.component.scss',
  imports: [FormCompanyComponent, CompaniesModule],
  standalone: true
})
export class UpdateCompanyComponent implements OnInit {

  company!: ICompany;
  id: string = '';

  constructor(private companyService: CompanyService, private route: ActivatedRoute) { 
  }
 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.companyService.buscar(id).subscribe(
      result => {
        this.company = result
      }
    )
  }
}
