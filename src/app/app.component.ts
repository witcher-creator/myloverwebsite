import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private authService: AuthService,
  ){
  }

  login(): void {
    this.authService.login();
  }

  printUser(event) {
    console.log(event);
  }

  printError(event) {
    console.error(event);
  }
}
