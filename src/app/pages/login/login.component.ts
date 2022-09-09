import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private user:UserService) {

   }

  ngOnInit(): void {
  }

  onClick(){
this.auth.loginWithGoogle()
.then(response => {
console.log(response)
this.router.navigate(['/'])
this.user.newUser()
})
}


logout() {
  this.auth.logOut()
    .then(()=> {
      this.router.navigate(['login']);
     })
     .catch(error => console.log(error))
}

}
