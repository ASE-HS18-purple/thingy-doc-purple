import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AppRouting} from './app-routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import {Authenticate} from './authentication/authenticate';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from './guard/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    NavigationComponent,
    WelcomeComponent,
    HomeComponent,
  ],
  entryComponents: [
    SignUpComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    Authenticate,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
