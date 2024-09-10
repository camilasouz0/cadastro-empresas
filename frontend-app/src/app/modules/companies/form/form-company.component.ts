import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICompany } from '../../../Interfaces/ICompany';
import { CompanyService } from '../../../services/company.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CompaniesModule } from '../companies.module';

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.scss'],
  imports: [CompaniesModule],
  standalone: true
})
export class FormCompanyComponent implements OnChanges {
  @Input() company!: ICompany;
  @Input() operacao!: string;

  public form: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private companyService: CompanyService, 
    private router: Router
  ) {
    this.form = this.criarFormulario();
  }

  public voltar(): void {
    this.router.navigate(["/companies"]);
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const cnpj = this.form.get("cnpj")?.value;
      this.companyService.validateCNPJ(cnpj).subscribe({
        next: (result) => {
          this.suggestUpdate(result)
        },
        error: (err) => {
          Swal.fire({
            title: 'Erro!',
            text: 'Este CNPJ não existe! Insira um CNPJ valido e real.',
            icon: 'error',
            timer: 3000,
            showConfirmButton: false
          });
        }
      });
    } else {
      this.markAllFieldsAsTouched();
      Swal.fire({
        title: 'Erro!',
        text: 'Por favor, preencha todos os campos obrigatórios.',
        icon: 'error',
        timer: 3000,
        showConfirmButton: false
      });
    }
  }

  public create(): void {
    this.companyService.criar(this.form.value).subscribe({
      next: () => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Empresa criada com sucesso.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/companies']);
        });
      },
      error: (error) => {
        console.error(error);
        Swal.fire({
          title: 'Erro!',
          text: 'Não foi possível criar a empresa.',
          icon: 'error',
          timer: 3000,
          showConfirmButton: false
        });
      }
    });
  }

  public update(): void {
    const id = this.form.get('id')?.value;
    this.companyService.atualizar(id, this.form.value).subscribe({
      next: () => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Empresa atualizada com sucesso.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/companies']);
        });
      },
      error: (error) => {
        console.error(error);
        Swal.fire({
          title: 'Erro!',
          text: 'Não foi possível atualizar a empresa.',
          icon: 'error',
          timer: 3000,
          showConfirmButton: false
        });
      }
    });
  }

  public ngOnChanges(): void {
    if (this.company) {
      this.form.patchValue(this.company);
    }
  }

  private suggestUpdate(data: any): void {
    Swal.fire({
      title: 'CNPJ encontrado na Receita Federal!',
      text: 'Deseja atualizar os dados com as informações da Receita?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sim, atualizar',
      cancelButtonText: 'Não, manter meus dados',
    }).then((result) => {
      if (result.isConfirmed) {
        this.form.patchValue({
          nome: data.nome_fantasia || data.razao_social,
          cnpj: data.cnpj,
          endereco: `${data.logradouro}, ${data.numero}. ${data.municipio}/${data.uf}.`,
          email: data.email,
          telefone: data.ddd_telefone_1,
        });
      }
    }).then(() => {
      switch (this.operacao) {
        case 'create':
          this.create();
          break;
        case 'update':
         this.update();
          break;
        default:
          console.error('Operação inválida');
      }
    });
  }

  private markAllFieldsAsTouched(): void {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  protected criarFormulario(): FormGroup {
    return this.fb.group({
      id: [null],
      nome: [null, [Validators.required]],
      cnpj: [null, [Validators.required]],
      endereco: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, [Validators.required]],
    });
  }
}
