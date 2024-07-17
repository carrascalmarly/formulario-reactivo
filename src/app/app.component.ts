import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formularioReactivo';
  reactiveForm: FormGroup

  constructor(private formBuilder:FormBuilder){
    this.reactiveForm = this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email:['', [Validators.required, Validators.email]],
      telefono:['',[Validators.required,Validators.maxLength(10), Validators.minLength(10),Validators.pattern(`^[0-9]{10}$`)]],
      ciudad:['',[Validators.required, Validators.pattern(`^[a-zA-Z\s]+$`)]],
      direccion:['',[Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      estado:['',[Validators.required,Validators.pattern(`^[a-zA-Z\s]+$`)]],
      codigoPostal:['',[Validators.required,Validators.pattern(`^[0-9]{5}$`),Validators.minLength(5),Validators.maxLength(5)]],
      pais:['',[Validators.required,Validators.pattern(`^[a-zA-Z\s]+$`)]],
      nombreDeUsuario:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern(`^[a-zA-Z0-9]+$`)]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
    
  }
  onSubmit(){
    if (this.reactiveForm.valid){
      alert("El formulario es valido")
      console.log("Form Submitted!")
    }else{
      alert("El formulario no es valido")
      console.log("Form not submitted!")
    }
  }
}
