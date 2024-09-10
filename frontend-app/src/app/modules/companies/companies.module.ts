import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { CompanyService } from '../../services/company.service';
import { provideHttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  imports: [
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ListboxModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    InputMaskModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    provideHttpClient(),
    provideEnvironmentNgxMask(),
    CompanyService
  ]
})
export class CompaniesModule { }
