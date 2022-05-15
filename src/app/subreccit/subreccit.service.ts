import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubreccitModel } from './subreccit-response';
import { Observable } from 'rxjs';
import { PostModel } from '../shared/post-model';


@Injectable({
  providedIn: 'root'
  
})
export class SubreccitService {
  constructor(private http: HttpClient) { }

  getAllSubreccits(): Observable<Array<SubreccitModel>> {
    return this.http.get<Array<SubreccitModel>>('http://localhost:8080/api/subreccit');
  }

  createSubreccit(subreccitModel: SubreccitModel): Observable<SubreccitModel> {
    return this.http.post<SubreccitModel>('http://localhost:8080/api/subreccit',
      subreccitModel);
  }

  getAllPostsBySubreccit(id:number): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/by-subreccit/' + id);
  }
}