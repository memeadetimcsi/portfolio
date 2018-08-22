import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elerhetoseg',
  templateUrl: './elerhetoseg.component.html',
  styleUrls: ['./elerhetoseg.component.css']
})
export class ElerhetosegComponent implements OnInit {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: '../../assets/img/kapcsolat.jpg' },
      { name: 'assets/img/grafika.jpg' },
      { name: 'assets/img/webfejlesztes.jpg' },
      { name: 'assets/img/szolgaltatasok.jpg' }
    ];
   }

  ngOnInit() {
  }

}
