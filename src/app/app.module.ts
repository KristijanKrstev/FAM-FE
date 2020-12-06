import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionSearchComponent } from './transaction-search/transaction-search.component';
import { WorkListComponent } from './work-list/work-list.component';
import { WorkSearchComponent } from './work-search/work-search.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountSearchComponent } from './account-search/account-search.component';
import { SavingsComponent } from './savings/savings.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { WorkCreateComponent } from './work-create/work-create.component';
import { WorkEditComponent } from './work-edit/work-edit.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { SavingEditComponent } from './saving-edit/saving-edit.component';
import { PasswordChangeComponent } from './password-change/password-change.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    TransactionListComponent,
    TransactionSearchComponent,
    WorkListComponent,
    WorkSearchComponent,
    ContactComponent,
    AboutComponent,
    AccountListComponent,
    AccountSearchComponent,
    SavingsComponent,
    UserEditComponent,
    AccountCreateComponent,
    TransactionCreateComponent,
    WorkCreateComponent,
    WorkEditComponent,
    TransactionEditComponent,
    AccountEditComponent,
    SavingEditComponent,
    PasswordChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
