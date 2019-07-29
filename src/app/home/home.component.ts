import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private authService: AuthService, private router: Router) {
    // Watch for changes to the isAuthenticated state
    this.authService.isAuthenticated.subscribe(value => {
      this.isAuthenticated = value;
    });
  }

  ngOnInit() {
    // Get an instance of the Auth0 client
    if (this.isAuthenticated) {
      this.router.navigate(['todo-list']);
    }
  }
}
