import { Component, OnInit, Inject, ViewEncapsulation, AfterViewChecked, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {IssueService} from '../issue.service';
import {Router} from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

import {HighlightService} from '../highlight.service';
import {BloggerService} from '../blogger.service';
import {Issue, Uploads, BloggerPosts} from '../issue.model';
import { from } from 'rxjs';


// tslint:disable-next-line:use-pipe-transform-interface
@Pipe ({name: 'safeHtml'})


@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.css'
  ],
  encapsulation: ViewEncapsulation.None

})
export class ListcomponentComponent implements  OnInit, AfterViewChecked, PipeTransform {

  issues: Issue[];
  images: Uploads[];

  listco: ListcomponentComponent;
  bloggerPosts: BloggerPosts[] = [];

  highlighted = false;
  tagApiActivated = true;
  filename = '';

  expendPost = false;

  displayedColumns = ['title', 'responsebile', 'description', 'severity', 'status', 'actions'] ;
  test: boolean;
  darkMode: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private bloggerService: BloggerService, private issueService: IssueService, private router: Router,
              @Inject(HighlightService) private readonly highlightService: HighlightService,
              private sanitizer: DomSanitizer, private _snackBar: MatSnackBar) { }


            transform(html) {
                return this.sanitizer.bypassSecurityTrustStyle(html);
                // return this.sanitizer.bypassSecurityTrustHtml(html);
                // return this.sanitizer.bypassSecurityTrustScript(html);
                // return this.sanitizer.bypassSecurityTrustUrl(html);
                // return this.sanitizer.bypassSecurityTrustResourceUrl(html);
              }

  ngOnInit() {
    this.fetchIssues();
   // this.showImage();
    this.ngAfterViewChecked();

    // @call function
    this.blog_PostRetrive();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewChecked() {
    // if (this.listco && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    // }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  // Retrive Data From Blog
  blog_PostRetrive() {
    this.bloggerService.getBlog_Json().subscribe((data: BloggerPosts[]) => {
      this.bloggerPosts = data;
      console.log (this.bloggerPosts);
      this.blog_PostExpend('');
    });
  }

  blog_PostExpend(id) {
    this.bloggerService.getBlog_SpecficPost(id).subscribe((data: BloggerPosts[]) => {
      this.bloggerPosts = data;
      console.log(this.bloggerPosts);
    });
  }


  fetchIssues() {
    this.issueService.
    getIssues().subscribe((data: Issue[]) => {
      this.issues = data;
      this.tagApiActivated = true;
      // console.log(this.issues);
    });
  }

  // @parm- ID So Post Avi. With ID
  postAvi_id(id) {
    this.issueService.
    getIssueById(id).subscribe((data: Issue[]) => {
      this.issues = data;
      this.router.navigate([`/postAvi/${id}`]);
    } );
  }

  tagApi(tag: string) {
    this.issueService.getTagRes(tag).subscribe((data: Issue[]) => {
      this.issues = data;
      this.tagApiActivated = false;
      // console.log (this.issues);
    });
  }
 // @image by Filename!!!

  // @image Show Up
  showImage() {
    this.issueService.getImages().subscribe((data: Uploads[]) => {
      this.images = data;
      // console.log (this.images);
    });
  }

  // @get OneImage data
  oneImageReturn(filename) {
    this.issueService.returnOneImage(filename).subscribe((data: Uploads[]) => {
      this.images = data;
      filename = this.images;
     // this.router.navigate([`/list/${filename}`]);
    });
  }

  editIssues(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }



}

