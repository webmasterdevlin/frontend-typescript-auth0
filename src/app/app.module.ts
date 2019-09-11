import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './shared/navbar.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorModule } from './auth/http-request.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavbarComponent,
    HomeComponent,
    CallbackComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpInterceptorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
