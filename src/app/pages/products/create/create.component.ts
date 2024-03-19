import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, 
            CommonModule, 
            ToastrModule,
            RouterLink
            ],   
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
 productForm : FormGroup;
 isFormSubmitted: boolean = false; 

 constructor(
  private http: HttpClient,
  private toastr: ToastrService
  ) {
  this.productForm = new FormGroup({
    productCode: new FormControl("", [Validators.required]),
    productName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    productPrice: new FormControl(""),
    quantity: new FormControl("")
  });
}

onSubmit() {
  const isFormValid = this.productForm.valid;
  const obj = this.productForm.value;
  this.isFormSubmitted = true;

  if (isFormValid) {
    this.http.post('http://192.168.191.235:8000/api/products/store', obj).subscribe((res: any) => {
      this.productForm.reset();
      this.toastr.success('Product Create Successfylly');
    });
  }
}
}
