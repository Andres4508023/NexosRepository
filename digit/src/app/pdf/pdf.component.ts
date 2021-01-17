import { Component, OnInit } from '@angular/core';

import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
