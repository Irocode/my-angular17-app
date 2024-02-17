import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

export interface CodeModel {
  language: string;
  value: string;
  uri: string;

  dependencies?: Array<string>;
  schemas?: Array<{
    uri: string;
    schema: Object;
  }>;
}

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent {

  
  @ViewChild(MatAccordion) accordion: MatAccordion;
}
