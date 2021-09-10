import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, tap} from "rxjs/operators";
import {Post} from "./post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.http.post(
      'https://angular-http-full-course-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      postData).subscribe((responseData) => {
        console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get('https://angular-http-full-course-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      .pipe(
      //  tap(response => console.log(response)),
        map((responseData: {[key: string]: Post}) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        })
      )
      .subscribe( posts => {
      console.log(posts[0]);
    });
  }
}
