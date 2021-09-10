import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import {map} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http.post<{name: string}>(
      'https://angular-http-full-course-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      postData).subscribe((responseData) => {
      console.log(responseData);
    }, error => {
        this.error.next(error.message);
    });
  }

  fetchPosts(){
    return this.http.get<{[key: string]: Post}>(
      'https://angular-http-full-course-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
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
        })
      );
  }

  deletePosts() {
    return this.http.delete('https://angular-http-full-course-default-rtdb.europe-west1.firebasedatabase.app/posts.json');

  }
}
