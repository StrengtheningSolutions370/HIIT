import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { RepoService } from '../repo.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  @Output() fetchSaleCategoryReport = new EventEmitter<any>();

  constructor(public repo: RepoService) {
    this.getAllSaleCategoryReport();
   }

  getAllSaleCategoryReport(): Observable<any>{
    return this.repo.getSaleCategoryReport();
  }
}
