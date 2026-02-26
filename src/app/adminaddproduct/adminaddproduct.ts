
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Common } from '../service/common';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-adminaddproduct',
  //standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink, RouterModule],
  templateUrl: './adminaddproduct.html',
  styleUrls: ['./adminaddproduct.scss']
})
export class Adminaddproduct {
  
  productForm: FormGroup;

  selectedFiles: (File | null)[] = [null, null, null, null];

  calculatedWeekly: number = 0;
  calculatedMonthly: number = 0;

  common = inject(Common);

  constructor(private fb: FormBuilder) {

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      weight: ['', Validators.required],
      nutrition: ['', Validators.required],
      dailyPrice: ['', Validators.required],

      weeklyType: ['manual'],
      weeklyPrice: [''],
      weeklyDiscount: [''],

      monthlyType: ['manual'],
      monthlyPrice: [''],
      monthlyDiscount: ['']
    });

    this.productForm.valueChanges.subscribe(() => {
      this.calculatePrices();
    });
  }

  onFileSelected(event: any, index: number) {
    const file = event.target.files[0];
    if (file) this.selectedFiles[index] = file;
  }

  removeFile(index: number) {
    this.selectedFiles[index] = null;
  }

  calculatePrices() {
    const daily = Number(this.productForm.value.dailyPrice) || 0;

    if (this.productForm.value.weeklyType === 'discount') {
      const discount = Number(this.productForm.value.weeklyDiscount) || 0;
      this.calculatedWeekly = daily - (daily * discount / 100);
    }

    if (this.productForm.value.monthlyType === 'discount') {
      const discount = Number(this.productForm.value.monthlyDiscount) || 0;
      this.calculatedMonthly = daily - (daily * discount / 100);
    }
  }

  addProduct() {

    if (this.productForm.invalid) {
      alert('Please fill all required fields');
      return;
    }

    const formData = new FormData();

    formData.append('name', this.productForm.value.name);
    formData.append('category', this.productForm.value.category);
    formData.append('description', this.productForm.value.description);
    formData.append('weight', this.productForm.value.weight);
    formData.append('nutrition', this.productForm.value.nutrition);

    const daily = this.productForm.value.dailyPrice;

    const weekly = this.productForm.value.weeklyType === 'manual'
      ? this.productForm.value.weeklyPrice
      : this.calculatedWeekly;

    const monthly = this.productForm.value.monthlyType === 'manual'
      ? this.productForm.value.monthlyPrice
      : this.calculatedMonthly;

    formData.append('price[daily]', daily);
    formData.append('price[weekly]', weekly);
    formData.append('price[monthly]', monthly);

    this.selectedFiles.forEach(file => {
      if (file) formData.append('images', file);
    });

    this.common.createProduct(formData).subscribe({
      next: () => {
        alert('Product Added Successfully!');
        this.productForm.reset({
          weeklyType: 'manual',
          monthlyType: 'manual'
        });
        this.selectedFiles = [null, null, null, null];
      },
      error: (err) => {
        console.error(err);
        alert('Failed to create product');
      }
    });
  }
}
