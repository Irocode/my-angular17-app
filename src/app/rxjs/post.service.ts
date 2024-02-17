import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, map } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts'; // Beispiel-URL für die API

  constructor(private http: HttpClient) { }


  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl).pipe(
      map((response: any) => {
        // Hier kannst du die JSON-Antwort auf die gewünschte Struktur abbilden,
        // z.B. indem du Eigenschaften umbenennst oder zusätzliche Transformationen durchführst.
        return response.map((item: any) => {
          return {
            id: item.id,
            title: item.title,
            body: item.body,
            userId: item.userId,
            // Weitere Eigenschaften entsprechend deiner Post-Modellklasse
          };
        });
      }),
      catchError((error: any) => {
        console.error('Fehler beim Laden der Posts:', error);
        return throwError('Fehler beim Laden der Posts. Bitte versuche es später erneut.');
      })
    );
  }







}