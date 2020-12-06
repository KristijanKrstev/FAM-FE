import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountSearchComponent } from './account-search/account-search.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { RegisterComponent } from './register/register.component';
import { SavingEditComponent } from './saving-edit/saving-edit.component';
import { SavingsComponent } from './savings/savings.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { TransactionSearchComponent } from './transaction-search/transaction-search.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { WorkCreateComponent } from './work-create/work-create.component';
import { WorkEditComponent } from './work-edit/work-edit.component';
import { WorkSearchComponent } from './work-search/work-search.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'transactions', component: TransactionSearchComponent },
  { path: 'works', component: WorkSearchComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'accounts', component: AccountSearchComponent },
  { path: 'savings', component: SavingsComponent },
  { path: 'savingsEdit', component: SavingEditComponent },
  { path: 'user', component: UserEditComponent},
  { path: 'account/create', component: AccountCreateComponent},
  { path: 'transaction/create', component: TransactionCreateComponent},
  { path: 'work/create', component: WorkCreateComponent},
  { path: 'work/edit/:id', component: WorkEditComponent},
  { path: 'transaction/edit/:id', component: TransactionEditComponent},
  { path: 'account/edit/:id', component: AccountEditComponent},
  { path: 'user/password/:id', component: PasswordChangeComponent},
  { path: '**', component: LoginComponent }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
