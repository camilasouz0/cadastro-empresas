import { Routes } from '@angular/router';

import { LoginComponent } from './modules/auth/login/login.component';
import { ListCompaniesComponent } from './modules/companies/list/list-companies.component';
import { AuthGuard } from '../app/guards/auth.guard'
import { UpdateCompanyComponent } from './modules/companies/update/update-company.component';
import { CreateCompanyComponent } from './modules/companies/create/create-company.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {
        path: '',
        children: [
            {path: 'login', component: LoginComponent}
        ]
    },
    {
        path: 'companies',
        canActivate: [AuthGuard],
        children: [
            {path: '', component: ListCompaniesComponent, canActivate: [AuthGuard]},
            {path: 'create', component: CreateCompanyComponent, canActivate: [AuthGuard]},
            {path: 'edit/:id', component: UpdateCompanyComponent, canActivate: [AuthGuard]},
        ]
    },

    {
        path        : '**',
        pathMatch   : 'full',
        redirectTo: 'companies'
    }
];
