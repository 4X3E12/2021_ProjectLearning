import { Component, OnInit, Pipe, PipeTransform, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnDestroy, ViewChild } from '@angular/core';
import {IssueService} from '../issue.service';
import { DomSanitizer } from '@angular/platform-browser';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {  FileUploader, FileItem, FileUploaderOptions } from 'ng2-file-upload';
import {NgxEditorModule, Editor, NgxEditorConfig} from 'ngx-editor';
import {toHTML} from 'ngx-editor';
import {toDoc} from 'ngx-editor';
import {schema} from 'ngx-editor';

import {FormGroup,FormsModule ,FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { NgxEditorServiceConfig } from 'ngx-editor/lib/editor.service';

@Pipe ({
  name: 'safeHtml'
})



@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css'],
})

@NgModule ({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})


export class CreateComponentComponent implements OnInit,OnDestroy, PipeTransform{
  editor: Editor;
  creatForm: FormGroup;
  myForm: FormGroup;
  selectFile = null;
  html = '';

  //@ViewChild('descritption', { static: false }) messageElement: ElementRef;



  public test;
  hellotest = 'Hello Testing Calling';
  public fontSize;

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true
};


  // Upload File Here!
  // public URL = 'http://localhost:4420/uploads';
  //public uploader: FileUploader = new FileUploader({url: 'http://localhost:4420/uploads', itemAlias: 'file'});


  constructor(private issuesService: IssueService,
              private fb: FormBuilder,
              private routera: Router,
              private sanitizer: DomSanitizer, private http: HttpClient) {



    this.creatForm = this.fb.group({
      title: ['', Validators.required],
      responsible: ['', Validators.required],
      descritption: '',
      severity: ''
    });

    this.myForm = this.fb.group({
      file: ''
    });
  }

  ngOnInit() {
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any) => {
    //      console.log('FileUpload:uploaded:', item, status, response);
    //      alert('File uploaded successfully');
    //  };
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    this.editor.destroy();
  }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustStyle(html);
    //return this.sanitizer.bypassSecurityTrustHtml(html);
    // return this.sanitizer.bypassSecurityTrustScript(html);
    // return this.sanitizer.bypassSecurityTrustUrl(html);
    // return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }

  addIssue(title, res, des, serv){
    this.issuesService.addIssue(title, res, des, serv).subscribe(() => {
      this.routera.navigate([`/list`]);
    });
  }

  // File Selected
  onFileSelected(event) {
this.selectFile = event.target.files[0] as File;
  }

  onUpload() {
    const fd = new FormData();
    fd.append ('file', this.selectFile, this.selectFile.name)
    this.http.post('http://192.168.43.55:4420/uploads', fd )
    .subscribe (res => {
      console.log(res);
    });
  }

  // fileUpload(file) {
  //   this.issuesService.addUpload(file).subscribe(() => {
  //     this.routera.navigate([`/list`]);
  //   });
  // }


  changeColor() {
    if(true) {
      this.test = true;
    }
  }

}

