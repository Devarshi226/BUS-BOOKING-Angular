import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogin: boolean = false;

  constructor(private auth:AuthenticationService) { }

  onLogout(){
  this.auth.Logout();
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  }

  ngOnInit(): void {



  }

  checkLogin(){
    if(localStorage.getItem('token')){
      this.isLogin = true;
    }else{
      this.isLogin = false;
    }
  }
}
