import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Issue} from './issue.model' ;
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class IssueService {
    [x: string]: any;

    url = 'http://127.0.0.1:4420';

  constructor(private http: HttpClient ) {   }


  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.url}/issues`)
    .pipe (
      tap (_ => console.log('fetched Data!')),
      catchError(this.handleError<Issue[]>('getData_', []))

      );
  }

  getIssueById(id: Int16Array): Observable<Issue[]> {

    return this.http.get<Issue[]>(`${this.url}/issues/${id}`)
    .pipe (
      tap (_ => console.log('fetched id,s!')),
      catchError(this.handleError<Issue[]>('getiD_', [])));
  }

  // Find With TagLine;
  getTagRes(tag: string): Observable<Issue[]>{
    return this.http.get<Issue[]>(`${this.url}/tag/${tag}`)
    .pipe(
      tap (_ => console.log('True')),
      catchError (this.handleError<Issue[]>('getTag', []))
    );
  }

   // Get Images from Server;
  getImages() {
    return this.http.get(`${this.url}/files`);
  }

  // @show Image Only One & check Image or Not;
  returnOneImage(filename){
    // const ImaeRetun = {filename: filename };
    return this.http.get(`${this.url}/image/${filename}`);
  }


  addIssue( title: string, responsible: string, descriptoin: string, serverity: string) {
    const issue = {
      title,
      responsebile: responsible,
      description: descriptoin,
      severity: serverity,
    };
    return this.http.post(`${this.url}/issues/add`, issue);
  }

  addUpload(file) {
    const uploadFile = {
      file
    };
    return this.http.post(`${this.url}/uploads`, uploadFile);
  }

  uploadImage(file) {
    const formData: FormData = new FormData();
    formData.append('file', '', '');
    return this.http.post(`${this.url}/uploads`, formData);
}
// @showImage by Name
showImageFileName(filename: string){
  return this.http.get<Issue[]>(`${this.url}/image/${filename}`)
  .pipe(
    tap (_ => console.log('True I')),
    catchError (this.handleError<Issue[]>('showImage', []))
  );
}


  // Upade Code
  updateIssue( id, title: string, responsebile: string, description: string, severity: string,status: string) {
    const issue = {
      title,
      responsebile,
      description,
      severity,
      status
    };
    return this.http.post(`${this.url}/issues/update/${id}`, issue);
  }

  deleteIssue(id){
    return this.http.get(`${this.url}/issues/delete/${id}`);
  }


  // Handle Error's
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
