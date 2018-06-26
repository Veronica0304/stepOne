import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

const authRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'login',
        component: AuthComponent
    },
    {
        path: 'register',
        component: AuthComponent
    }
]);


@NgModule({
    imports: [FormsModule, ReactiveFormsModule, authRouting, CommonModule, SharedModule],
    declarations: [AuthComponent],
    providers: []
})
export class AuthModule { }
