import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  providers:[Router],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(private authService:AuthService, private router:Router){}

  username: string = '';
  password: string = '';
  minLength: boolean = false;
  hasUpperCase: boolean = false;
  hasLowerCase: boolean = false;
  hasSpecialChar: boolean = false;
  noConsecutiveNumbers: boolean = false;
  noConsecutiveLetters: boolean = false;
  passwordValid: boolean = false;

  validatePassword() {
    const minLength = this.password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(this.password);
    const hasLowerCase = /[a-z]/.test(this.password);
    const hasSpecialChar = /[^a-zA-Z0-9]/.test(this.password);
    const noConsecutiveNumbers = !/(012|123|234|345|456|567|678|789|890)/.test(this.password);
    const noConsecutiveLetters = !/(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i.test(this.password);

    this.minLength = minLength;
    this.hasUpperCase = hasUpperCase;
    this.hasLowerCase = hasLowerCase;
    this.hasSpecialChar = hasSpecialChar;
    this.noConsecutiveNumbers = noConsecutiveNumbers;
    this.noConsecutiveLetters = noConsecutiveLetters;

    this.passwordValid = 
      this.minLength &&
      this.hasUpperCase &&
      this.hasLowerCase &&
      this.hasSpecialChar &&
      this.noConsecutiveNumbers &&
      this.noConsecutiveLetters;
  }

  onSubmit() {
    if (this.passwordValid) {
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      this.authService.authRegister({username: this.username,password:this.password}).subscribe((res:any)=>{
        if(res.estatus==true){
          alert(res.mensaje);
          this.router.navigate(['login'])
        }else{
          console.log('valiste berja');
        }
        
      })
    }
  }
}
