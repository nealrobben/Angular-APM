import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  
  constructor(private router:Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      
      let id = +next.url[1].path;

      if(isNaN(id) || id < 1){
        alert("Invalid product Id");
        this.router.navigate(['/products']);
        return false;
      };

      return true;
    }
  
}
