import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {


  validEmail(email: string) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) )
    {
      alert('Format Email invalide');
      console.log('Format Email invalide');
    }

  }

  validPassword(password: string) {
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/.test(password))
    {
      alert('Format password invalide');
      console.log('Format password invalide');
    }

  }
}
