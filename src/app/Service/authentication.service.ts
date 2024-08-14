import { Injectable } from '@angular/core';
import { from, Observable, of } from "rxjs";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private authfire: AngularFireAuth, private route: Router, private firestore: AngularFirestore) { }


  signIn(params: SignIn): Observable<any> {
    return from(this.authfire.signInWithEmailAndPassword(
      params.email, params.password
    )).pipe(
      tap(()=>{
        // console.log("Valid Email or Password");
        setTimeout(()=>{
          //We can Hide spinner here
        },2000)
      }, error => {
        console.log("Invalid Email or Password");
      })
    )
    }

  signUp(user:SignUp): Observable <any>{
return from(this.authfire.createUserWithEmailAndPassword(user.Email, user.password)).pipe(
  tap(() => {
    console.log("User Created.")
    setTimeout(() => {
      //We can Hide spinner here
    }, 2000);
  }, error => {
    console.log("Email already exist.")
  })
);
  }


  sendtoken() {
    const length = 32
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@~#$%^&*()_+|}{:;<>?';
    let token = '';
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    localStorage.setItem("token", token)

  }
  setemailtoken(email: any) {
    localStorage.setItem("id", email)
  }

  Logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    this.route.navigate(['auth/login'])
  }

  forgotPassword(email: string): Observable<void> {
    return from(this.authfire.sendPasswordResetEmail(email)).pipe(tap(()=>{
      setTimeout(()=>{
        console.log('A recovery Email hase been sent to your User Email');
        this.route.navigate(['login'])
      },2000)
    }))
  }




  get IsLoggedIn() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }


}

type SignIn = {
  email: string; password: string;
}
type SignUp = {
  Email: string; password: string;
}
