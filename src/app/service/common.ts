import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment, homesalads } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Common {
   http = inject(HttpClient);

  getAdminDashboard() {
    return this.http.get(environment.baseUrl + homesalads.Admindashboard)
  }

  createProduct(body:any){
    return this.http.post(environment.baseUrl + homesalads.createProduct,body)
  }

  getProducts(page: number, limit: number, search?: string){
    return this.http.get(environment.baseUrl + homesalads.getProducts + `?page=${page}&limit=${limit}&search=${search || ''}`)
  }
  updateProduct(id: string, body:any){
    return this.http.put(environment.baseUrl + homesalads.updateProduct + `/${id}`,body)
  }
  getUsers(page: number, limit: number, search?: string){
    return this.http.get(environment.baseUrl + homesalads.getUsers + `?page=${page}&limit=${limit}&search=${search || ''}`)
  }
  
}
