import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  datos_clima=[{humedad:'',temperatura:''}]
  users:any
  admin:any
  key:any
  refacciones:any
  credenciales={
    username:'',
    password:'',
    rol:''
  }
  constructor(private router:Router, private servicio:AuthService){}
  ngOnInit(): void {
    this.servicio.wheatherApi().subscribe((res)=>{
      this.datos_clima[0].humedad=res.current.humidity;
      this.datos_clima[0].temperatura=res.current.temp_c;
    })
   this.servicio.getUsers().subscribe((res)=>{
    this.users=res;
   })
   if(typeof window!='undefined'){
    this.key=window.localStorage.getItem('key');
   }
   this.servicio.getRefas().subscribe((res)=>{
    this.refacciones=res;
   })
  }
  newUser(){

  }
  modifyData={
    id:0,
    username:'',
    rol:''
  }
  modify(id:any,username:any,role:any){
    this.modifyData.id=id;
    this.modifyData.username=username;
    this.modifyData.rol=role;
  }
  updateModify(){
    
  }

}
