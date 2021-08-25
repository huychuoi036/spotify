import { Component, OnInit } from '@angular/core';
import { cart } from '../core/data/data.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // isactive:any = '';
  isSearch?:boolean;
  data = [{
    id: 0
  }];
  constructor() { }

  ngOnInit() {}


  addActive(event:any) {
    // this.isactive = !this.isactive
    this.isSearch = false;
  }

  handlePlaylistNew(id:any) {
    this.data.push({
      id: this.data.length,
    })
    
  }
}
