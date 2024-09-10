import { CompaniesModule } from './../companies.module';
import { Component, OnInit } from '@angular/core';
import { ICompany } from '../../../Interfaces/ICompany';
import { CompanyService } from '../../../services/company.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrl: './list-companies.component.scss',
  imports: [CompaniesModule],
  standalone: true
})
export class ListCompaniesComponent implements OnInit {
  companies!: ICompany[];

  selectedCompany!: ICompany;

  constructor(
    private companyService: CompanyService,
    private router: Router
  ){
  }
  
  ngOnInit() {
    this.companyService.listar().subscribe(companies => {
      this.companies = companies;
    })
  }

  criar(): void {
    this.router.navigate([`/companies/create`])
  }

  editar(id: number): void {
    this.router.navigate([`/companies/edit/${id}`])
  }

  deletar(id: number): void {
    this.companyService.detelar(id).subscribe({
      next: () => {
          const index = this.companies.findIndex(company => company.id === id);
          if (index !== -1) {
            this.companies.splice(index, 1);
          }
          Swal.fire({
            title: 'Empresa removida!',
            text: 'A empresa foi removida com sucesso.',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          });
        },
        error: () => {
          Swal.fire({
            title: 'Erro!',
            text: 'Não foi possível remover a empresa.',
            icon: 'error',
            timer: 2000,
            showConfirmButton: false
          });
        }
    });
  }
  
}
