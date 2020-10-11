import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as ace from 'ace-builds'; 
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';
const THEME = 'ace/theme/github'; 
const LANG = 'ace/mode/javascript';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  @ViewChild('codeEditor') codeEditorElmRef: ElementRef;
  private codeEditor: ace.Ace.Editor;
  private editorBeautify;
  constructor() { }
  ngOnInit(): void {
    this.editorBeautify = ace.require('ace/ext/beautify');
    ace.require('ace/ext/language_tools');
    const element = this.codeEditorElmRef.nativeElement;
        const editorOptions=this.getEditorOptions();

  this.codeEditor = ace.edit(element, editorOptions);
  this.codeEditor.setTheme(THEME);
  this.codeEditor.getSession().setMode(LANG);
  this.codeEditor.setShowFoldWidgets(true); // for the scope fold feature
}
private getEditorOptions(): Partial<ace.Ace.EditorOptions> & { enableBasicAutocompletion?: boolean; } {
const basicEditorOptions: Partial<ace.Ace.EditorOptions> = {
      highlightActiveLine: true,
      minLines: 14,
      maxLines: Infinity,
  };
const extraEditorOptions = {
      enableBasicAutocompletion: true
  };
const margedOptions = Object.assign(basicEditorOptions, extraEditorOptions);
  return margedOptions;
}
public consoleCode() {
  console.log(this.getContent());
}
public setContent(content: string): void {
  if (this.codeEditor) {
      this.codeEditor.setValue(content);
  }
}
public OnContentChange(callback: (content: string, delta: ace.Ace.Delta) => void): void {
this.codeEditor.on('change', (delta) => {
      const content = this.codeEditor.getValue();
      callback(content, delta);
  });
}
public getContent() {
  if (this.codeEditor) {
      const code = this.codeEditor.getValue();
      return code;
  }
}
public beautifyContent() {
  if (this.codeEditor && this.editorBeautify) {
     const session = this.codeEditor.getSession();
     this.editorBeautify.beautify(session);
  }
}
}
