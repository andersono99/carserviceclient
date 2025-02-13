import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../shared/owner/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  owners: any;
  bucket: any[]= [];

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data;
      Object.entries(data._embedded.owners).map(data => {this.bucket.push(data[1])})
      
      
    });
  }
}
