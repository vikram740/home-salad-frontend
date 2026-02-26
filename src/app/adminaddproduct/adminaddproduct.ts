
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminaddproduct',
  //standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adminaddproduct.html',
  styleUrls: ['./adminaddproduct.scss']
})
export class Adminaddproduct {
  
  productForm: FormGroup;

  imagePreviews: (string | ArrayBuffer | null)[] = [null, null, null, null];
  selectedFiles: File[] = [];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      dailyPrice: [''],
      weeklyPrice: [''],
      monthlyPrice: [''],
      weeklyType: ['manual'],
      monthlyType: ['manual']
    });
  }

  onFileSelected(event: any, index: number) {
    const file = event.target.files[0];

    if (file) {
      this.selectedFiles[index] = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviews[index] = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  addProduct() {
    console.log(this.productForm.value);
    console.log(this.selectedFiles);
    alert('Product Added Successfully!');
  }
}
