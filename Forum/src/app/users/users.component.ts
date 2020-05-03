import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { merge, Observable, of as observableOf, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { UsersService } from 'src/services/users.service';
import { fromMatSort, fromMatPaginator, sortRows, paginateRows } from './datasource';


/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-users',
  styleUrls: ['users.component.css'],
  templateUrl: 'users.component.html',
})
export class UsersComponent implements  OnInit {
  displayedColumns: string[] = ['username', 'name', 'email', 'action'];
  page = 1;
  data: any[] = [];
  limit: number[] = [3, 5, 10];
  resultsLength = 0;
  isLoadingResults = true;
  isLimitReached = false;
  emptyData:boolean = false;
  value:number=5;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getLimmitedUsers(this.value, this.page).subscribe(resp => {
      this.isLoadingResults = false;
      this.resultsLength = resp.items.length
      this.data = resp.items
    })
  }

  nextPage() {
    this.page++
    this.userService.getLimmitedUsers(this.value, this.page).subscribe(resp => {
      this.data = resp.items;
      if (this.data.length < this.value) {
        this.isLimitReached = true
      }
      if(resp.items.length == 0){
        this.emptyData = true
      }
    })

  }

  previousPage() {
    this.page--
    if (this.page >= 1) {
      this.userService.getLimmitedUsers(this.value, this.page).subscribe(resp =>{ 
        this.data = resp.items;
        this.isLimitReached = false
      })
    }
    this.emptyData = false

  }
  onChange() {
    this.userService.getLimmitedUsers(this.value,1).subscribe(resp =>{ 
      this.data = resp.items;
      this.page=1
      if (this.data.length < this.value) {
        this.isLimitReached = true
      }else{
        this.isLimitReached = false
      }
    })
  }

}



