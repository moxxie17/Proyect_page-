import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService:AuthService, private router:Router){}
  credenciales={
    username:'',
    password:''
  }
  onSubmit(){
    this.authService.authPost(this.credenciales).subscribe((res:any)=>{
      if(res.estatus==true){
        if (typeof window!='undefined'){
          window.localStorage.setItem('key',res.rol)
        }
        this.router.navigate(['main']);
        alert('Bienvenido: '+this.credenciales.username);

      }else{
        alert('Credenciales incorrectas');
      }
    })
  }
}
