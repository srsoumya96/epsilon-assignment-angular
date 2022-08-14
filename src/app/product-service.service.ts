import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn : "root"
})
export class ProductServiceService {

  constructor(private _http : HttpClient) { }

  productsList = [];
  getProducts(){
    return this._http.get("https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json");
  }

}