import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private productUrl: string = "/api/product";

  constructor(private http: HttpClient) { }

  public getReviews(productId: number): Observable<Review[]>{
    console.log(productId)
    return this.http.get<Review[]>(environment.baseUrl+'/api/review/'+productId, {headers: environment.headers, withCredentials: environment.withCredentials})
    
  }
  public newReview(reviewInfo: any){
    console.log(reviewInfo)
    console.log(environment.baseUrl+'/api/review/'+'create-review')
    return this.http.post(environment.baseUrl+'/api/review/'+'create-review', reviewInfo)
    .subscribe(
      (resp) => console.log(resp),
      (err) => console.log(err),
      () => console.log("Review Sent")
    )
  }

}
