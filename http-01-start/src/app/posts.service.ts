import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post} from './post.model';
import {catchError, map} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title, content};
    this.http.post<{name: string}>(
      'https://angular-http-full-course-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      postData).subscribe((responseData) => {
      console.log(responseData);
    }, error => {
        this.error.next(error.message);
    });
  }

  fetchPosts(){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http.get<{[key: string]: Post}>(
      'https://angular-http-full-course-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      {
        headers: new HttpHeaders({'Custom-Header': 'Hello'}),
        params: searchParams
      })
      .pipe(
        //  tap(response => console.log(response)),
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete('https://angular-http-full-course-default-rtdb.europe-west1.firebasedatabase.app/posts.json');

  }
}
