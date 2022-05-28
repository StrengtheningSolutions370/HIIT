/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Venue } from 'src/app/models/venue';
import { UserRole } from '../models/userRole';
import { EmployeeType } from '../models/employeeType';
import { Title } from 'src/app/models/title';
import { QualificationType } from 'src/app/models/qualification-type';
import { Vat } from '../models/vat';
import { SaleItem } from '../models/sale-item';
import { SaleCategory } from 'src/app/models/sale-category';

@Injectable({
  providedIn: 'root'
})

export class RepoService {
  base = 'https://localhost:44383/api/';
  AppUserController = 'AppUser/'
  VenueController = 'Venue/';
  UserRoleController = 'UserRole/';
  EmployeeTypeController = 'EmployeeType/';
  TitleController = 'Title/';
  QualificationTypeController = 'QualificationType/';
  VatController = 'Vat/';
  SaleItemController = 'SaleItem/';
  SaleCategoryController = 'SaleCategory/';


  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      ContentType: 'application/json'
    }),
  };

  constructor(public http: HttpClient) {
    //CRUDS in this repo file need to be used by subscribing to them in the relevant service.
    //E.g to use getVenues(); it must be subscribed to in the venue service
  }

  //AppUser:
  //-------
  //Register
  register(userDetails: appUserRegister){
    console.log(userDetails);
    return this.http.post(`${this.base + this.AppUserController}register`,userDetails,this.httpOptions);
  }

  //Login
  login(userDetails: appUser){
    console.log(userDetails);
    return this.http.post(`${this.base + this.AppUserController}login`,userDetails,this.httpOptions)
  }

  //UserRole:
  //------
  //Create
  createUserRole(user_role: UserRole): Observable<any> {
    return this.http.post(`${this.base + this.UserRoleController}add`, user_role, this.httpOptions);
  }
  //Read
  getUserRoles(): Observable<any> {
    return this.http.get(`${this.base + this.UserRoleController}getAll`, this.httpOptions);
  }
  //Update
  updateUserRole(userId: number, user_role: UserRole): Observable<any> {
    return this.http.put(`${this.base + this.UserRoleController}update?id=${userId}`, user_role, this.httpOptions);
  }
  //Delete
  deleteUserRole(userId: number): Observable<any> {
    return this.http.delete(`${this.base + this.UserRoleController}delete?id=${userId}`, this.httpOptions);
  }
  //Exists
  userRoleExists(userId: number): Observable<any> {
    return this.http.delete(`${this.base + this.UserRoleController}exists?id=${userId}`, this.httpOptions);
  }
  //GetMatch
  getMatchUserRole(input: string): Observable<any> {
    return this.http.get(`${this.base + this.UserRoleController}getMatch?input=${input}`, this.httpOptions);
  }
  //Exists
  existsUserRole(id: number): Observable<any> {
    return this.http.get(`${this.base + this.UserRoleController}exists?id=${id}`, this.httpOptions);
  }


  //Venue:
  //------
  //Create
  createVenue(venue: any): Observable<any>{
    return this.http.post<any>(`${this.base+this.VenueController}add`,venue);
  }
  //Update
  updateVenue(venueId: number, venue: Venue): Observable<any> {
    return this.http.put(`${this.base + this.VenueController}update?id=${venueId}`, venue, this.httpOptions);
  }
  //Delete
  deleteVenue(venueId: number): Observable<any> {
    return this.http.delete(`${this.base + this.VenueController}delete?id=${venueId}`, this.httpOptions);
  }
  //GetAll
  getVenues(): Observable<any> {
    return this.http.get(`${this.base + this.VenueController}getAll`, this.httpOptions);
  }
  //GetMatch
  getMatchVenue(input: string): Observable<any> {
    return this.http.get(`${this.base + this.VenueController}getMatch?input=${input}`, this.httpOptions);
  }
  //Exists
  existsVenue(id: number): Observable<any> {
    return this.http.get(`${this.base + this.VenueController}exists?id=${id}`, this.httpOptions);
  }

  //EmployeeType:
  //------
  //Create
  createEmployeeType(employeeType: EmployeeType): Observable<any> {
    return this.http.post<any>(`${this.base+ this.EmployeeTypeController}add`, employeeType, this.httpOptions);
  }
  //Read
  getEmployeeTypes(): Observable<any> {
    return this.http.get(`${this.base + this.EmployeeTypeController}getAll`, this.httpOptions);
  }
  //Update
  updateEmployeeType(employeeTypeId: number, employeeType: EmployeeType): Observable<any> {
    return this.http.put(`${this.base + this.EmployeeTypeController}update?id=${employeeTypeId}`, employeeType, this.httpOptions);
  }
  //Delete
  deleteEmployeeType(employeeTypeId: number): Observable<any> {
    return this.http.delete(`${this.base + this.EmployeeTypeController}delete?id=${employeeTypeId}`, this.httpOptions);
  }
  getMatchEmployeeType(input: string): Observable<any> {
    return this.http.get(`${this.base + this.EmployeeTypeController}getMatch?input=${input}`, this.httpOptions);
  }
  //Exists
  existsEmployeeType(id: number): Observable<any> {
    return this.http.get(`${this.base + this.EmployeeTypeController}exists?id=${id}`, this.httpOptions);
  }

 // Title:
 // ------
 // Create
  createTitle(title: any): Observable<any>{
    return this.http.post<any>(`${this.base+this.TitleController}add`,title,this.httpOptions);
  }
  //Update
  updateTitle(titleId: number, title: Title): Observable<any>{
    return this.http.put(`${this.base+this.TitleController}update?id=${titleId}`,title, this.httpOptions);
  }
  //Delete
  deleteTitle(titleId: number): Observable<any>{
    return this.http.delete(`${this.base+this.TitleController}delete?id=${titleId}`,this.httpOptions);
  }
  //GetAll
  getTitles(): Observable<any>{
    return this.http.get(`${this.base+this.TitleController}getAll`, this.httpOptions);
  }
  //GetMatch
  getMatchTitle(input: string): Observable<any>{
    return this.http.get(`${this.base+this.TitleController}getMatch?input=${input}`, this.httpOptions);
  }
  //Exists
  existsTitle(id: number): Observable<any>{
    return this.http.get(`${this.base+this.TitleController}exists?id=${id}`, this.httpOptions);
  }
  

   //QualificationType:
  //------
 // Create
  createQualificationType(qualificationType: any): Observable<any>{
    return this.http.post<any>(`${this.base+this.QualificationTypeController}add`,qualificationType,this.httpOptions);
  }
  //Update
  updateQualificationType(qualificationTypeId: number, qualificationType: QualificationType): Observable<any>{
    return this.http.put(`${this.base+this.QualificationTypeController}update?id=${qualificationType}`,qualificationType, this.httpOptions);
  }
  //Delete
  deleteQualificationType(qualificationTypeId: number): Observable<any>{
    return this.http.delete(`${this.base+this.QualificationTypeController}delete?id=${qualificationTypeId}`,this.httpOptions);
  }
  //GetAll
  getQualificationTypes(): Observable<any>{
    return this.http.get(`${this.base+this.QualificationTypeController}getAll`, this.httpOptions);
  }
  //GetMatch
  getMatchQualificationType(input: string): Observable<any>{
    return this.http.get(`${this.base+this.QualificationTypeController}getMatch?input=${input}`, this.httpOptions);
  }
  //Exists
  existsQualificationType(id: number): Observable<any>{
    return this.http.get(`${this.base+this.QualificationTypeController}exists?id=${id}`, this.httpOptions);
  }

 //SaleCategory:
 //------
 // Create
 createSaleCategory(saleCategory: any): Observable<any>{
  return this.http.post<any>(`${this.base+this.SaleCategoryController}add`,saleCategory,this.httpOptions);
}
//Update
updateSaleCategory(saleCategoryId: number, saleCategory: SaleCategory): Observable<any>{
  return this.http.put(`${this.base+this.SaleCategoryController}update?id=${saleCategoryId}`,saleCategory, this.httpOptions);
}
//Delete
deleteSaleCategory(saleCategoryId: number): Observable<any>{
  return this.http.delete(`${this.base+this.SaleCategoryController}delete?id=${saleCategoryId}`,this.httpOptions);
}
//GetAll
getSaleCategory(): Observable<any>{
  return this.http.get(`${this.base+this.SaleCategoryController}getAll`, this.httpOptions);
}
//GetMatch
getMatchSaleCategory(input: string): Observable<any>{
  return this.http.get(`${this.base+this.SaleCategoryController}getMatch?input=${input}`, this.httpOptions);
}
//Exists
existsSaleCategory(id: number): Observable<any>{
  return this.http.get(`${this.base+this.SaleCategoryController}exists?id=${id}`, this.httpOptions);
}


  // VAT:
 // ------
/// Create
 createVAT(vat: any): Observable<any>{
  return this.http.post<any>(`${this.base+this.VatController}add`,vat,this.httpOptions);
 }
//Update
updateVAT(vatId: number, vat: Vat): Observable<any>{
  return this.http.put(`${this.base+this.VatController}update?id=${vatId}`,vat, this.httpOptions);
}
//Delete
deleteVat(vatId: number): Observable<any>{
  return this.http.delete(`${this.base+this.VatController}delete?id=${vatId}`,this.httpOptions);
}
//GetAll
getVats(): Observable<any>{
  return this.http.get(`${this.base+this.VatController}getAll`, this.httpOptions);
}
//GetMatch
getMatchVat(input: string): Observable<any>{
  return this.http.get(`${this.base+this.VatController}getMatch?input=${input}`, this.httpOptions);
}
//Exists
existsVat(id: number): Observable<any>{
  return this.http.get(`${this.base+this.VatController}exists?id=${id}`, this.httpOptions);
}

 // SALE ITEM:
 // ------
/// Create
createSaleItem(saleItem: any): Observable<any>{
  return this.http.post<any>(`${this.base+this.SaleItemController}add`,saleItem,this.httpOptions);
}
//Update
updateSaleItem(saleItem: SaleItem): Observable<any>{
  return this.http.put(`${this.base+this.SaleItemController}update`,saleItem, this.httpOptions);
}
//Delete
deleteSaleItem(SaleItemId: number): Observable<any>{
  return this.http.delete(`${this.base+this.SaleItemController}delete?id=${SaleItemId}`,this.httpOptions);
}
//GetAll
getSaleItems(): Observable<any>{
  return this.http.get(`${this.base+this.SaleItemController}getAll`, this.httpOptions);
}
//GetMatch
getMatchSaleItem(input: string): Observable<any>{
  return this.http.get(`${this.base+this.SaleItemController}getMatch?input=${input}`, this.httpOptions);
}
//Exists
existsSaleItem(id: number): Observable<any>{
  return this.http.get(`${this.base+this.SaleItemController}exists?id=${id}`, this.httpOptions);
}

}
