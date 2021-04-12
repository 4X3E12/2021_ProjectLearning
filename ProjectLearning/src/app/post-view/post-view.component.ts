import { Component, OnInit, Inject, ViewEncapsulation, AfterViewChecked, Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import {IssueService} from '../issue.service';
import {Router} from '@angular/router';
//import {MatTableDataSource } from '@angular/material';


import {HighlightService} from '../highlight.service';
import { ActivatedRoute, Params } from '@angular/router';

import {Issue, Uploads} from '../issue.model';
import { from } from 'rxjs';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe ({name: 'safeHtml'})

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class PostViewComponent implements OnInit, AfterViewChecked, PipeTransform {

   issuesa: Issue[];
  highlighted = false;

  constructor( private issueService: IssueService, private router: Router,
               @Inject(HighlightService) private readonly highlightService: HighlightService,
               private sanitizer: DomSanitizer, private routeaq: ActivatedRoute ) { }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustStyle(html);
    // return this.sanitizer.bypassSecurityTrustHtml(html);
    // return this.sanitizer.bypassSecurityTrustScript(html);
    // return this.sanitizer.bypassSecurityTrustUrl(html);
    // return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }

  ngOnInit() {
    this.ngAfterViewChecked();
    // this.fetchIssues();
    const id = this.routeaq.snapshot.paramMap.get('id');
    this.postAvi_id(id);
    console.log(id);
  }

   // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewChecked() {
    // if (this.listco && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    // }
  }


  postAvi_id(id: any) {
    this.issueService.
    getIssueById(id).subscribe((data: Issue[]) => {
      this.issuesa = data ;
      // console.log(this.issuesa);
     // this.router.navigate([`/postAvi/${id}`]);
    } );
  }

}
