import { Component, OnInit } from '@angular/core';
import { HttpSimpleService } from '../http-simple.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  brews: Object;

  constructor(private _http: HttpSimpleService) { }

  ngOnInit(): void {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }

}
