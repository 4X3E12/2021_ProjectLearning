import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BloggerPosts} from './issue.model';
import {Observable} from 'rxjs';
// tslint:disable-next-line: import-blacklist
import 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BloggerService {

    // Key of Blogger
    urlKey = 'BlogKey';
    blogID = 'blogid';
    urlB = `https://www.googleapis.com/blogger/v3/blogs/${this.blogID}`;
    blog: BloggerPosts[];

  constructor(private http: HttpClient) { }

  getBlog_Response()  {
    return this.http.get<BloggerPosts>(`${this.urlB}?key=${this.urlKey}`) ;
  }

  getBlog_Posts(): Observable <HttpResponse <BloggerPosts>> {
    return this.http.get<BloggerPosts> (`${this.urlB}/posts?key=${this.urlKey}` ,
     { observe: 'response' });
  }

  getBlog_Json(): Observable <BloggerPosts[]> {
    return this.http.get<BloggerPosts[]>(`${this.urlB}/posts?key=${this.urlKey}`);
  }

  // @specfic Post find
  getBlog_SpecficPost (id): Observable<BloggerPosts[]> {
    return this.http.get<BloggerPosts[]>(`${this.urlB}/posts/${id}?key=${this.urlKey}`);
  }

}
