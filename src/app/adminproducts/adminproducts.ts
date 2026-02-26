import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { Common } from '../service/common';
import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Modal } from 'bootstrap';
import { environment } from '../../environments/environment.development';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-adminproducts',
  imports: [DatePipe, CommonModule, FormsModule, ReactiveFormsModule,RouterLink,RouterModule],
  templateUrl: './adminproducts.html',
  styleUrl: './adminproducts.scss',
})
export class Adminproducts {
 products: any[] = [];
  searchTimeout: any;
  environment = environment;
   private platformId = inject(PLATFORM_ID);

  currentPage: number = 1;
  totalPages: number = 1;
  totalProducts: number = 0;
  limit: number = 10;

  searchText: string = '';

  // 🔥 Modal Related
  editForm!: FormGroup;
  selectedProductId!: string;
  selectedProductImages: any[] = [];

  common = inject(Common);
  cdr = inject(ChangeDetectorRef);
  fb = inject(FormBuilder);
  router = inject(Router)

  ngOnInit() {
    this.loadProducts();

    this.editForm = this.fb.group({
      name: [''],
      category: [''],
      description: [''],
      weight: [''],
      nutrition: [''],
      daily: [''],
      weekly: [''],
      monthly: ['']
    });
  }

  // ===============================
  // LOAD PRODUCTS
  // ===============================
  loadProducts() {
    this.common.getProducts(this.currentPage, this.limit, this.searchText)
      .subscribe((res: any) => {

        const data = res.data;

        this.products = data.products;
        this.totalPages = data.totalPages;
        this.totalProducts = data.totalProducts;
        this.currentPage = data.currentPage;

        this.cdr.markForCheck();
      });
  }

  // ===============================
  // SEARCH
  // ===============================
  onSearch() {
    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => {
      this.currentPage = 1;
      this.loadProducts();
    }, 400);
  }

  // ===============================
  // PAGINATION
  // ===============================
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadProducts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.loadProducts();
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // =====================================================
  // EDIT MODAL
  // =====================================================
  openEditModal(product: any) {

    this.selectedProductId = product._id;

    this.editForm.patchValue({
      name: product.name,
      category: product.category,
      description: product.description,
      weight: product.weight,
      nutrition: product.nutrition,
      daily: product.price?.daily,
      weekly: product.price?.weekly,
      monthly: product.price?.monthly
    });

  
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        import('bootstrap').then((bootstrap) => {
          const modalEl = document.getElementById('editModal');
          if (!modalEl) return;

          const modal = new bootstrap.Modal(modalEl);
          modal.show();
        });
      });
    }
  }

  updateProduct() {

    const body = {
      name: this.editForm.value.name,
      category: this.editForm.value.category,
      description: this.editForm.value.description,
      weight: this.editForm.value.weight,
      nutrition: this.editForm.value.nutrition,
      price: {
        daily: this.editForm.value.daily,
        weekly: this.editForm.value.weekly,
        monthly: this.editForm.value.monthly
      }
    };

    this.common.updateProduct(this.selectedProductId, body)
      .subscribe(() => {

        this.loadProducts();
    

        if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        import('bootstrap').then((bootstrap) => {
          const modalEl = document.getElementById('editModal');
          if (!modalEl) return;

          const modal = new bootstrap.Modal(modalEl);
          modal.show();
        });
      });
    }
      });
  }

  // =====================================================
  // VIEW IMAGES MODAL
  // =====================================================
  openViewModal(product: any) {

    this.selectedProductId = product._id;
    console.log('this.selectedProductId', this.selectedProductId)
    this.selectedProductImages = [...product.images];
    console.log('this.selectedProductImages', this.selectedProductImages)

  
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        import('bootstrap').then((bootstrap) => {
          const modalEl = document.getElementById('viewModal');
          if (!modalEl) return;

          const modal = new bootstrap.Modal(modalEl);
          modal.show();
        });
      });
    }
  }

  // =====================================================
  // SET PRIMARY IMAGE
  // =====================================================
  setPrimaryImage(clickedImage: any) {

    this.selectedProductImages.forEach(img => {
      img.isPrimary = false;
    });

    clickedImage.isPrimary = true;

    this.common.updateProduct(this.selectedProductId, {
      images: this.selectedProductImages
    }).subscribe(() => {
      this.loadProducts();
    });
  }

  navigate(){
    this.router.navigate(['/addproduct'])

  }

}
