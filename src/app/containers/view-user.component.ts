import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {RepositoryService} from '../services/repository.service';
import {filter, map, switchMap, takeWhile} from 'rxjs/operators';

@Component({
  selector: `app-view-user`,
  template: `
    <h1>{{this.user ? this.user.email : ''}}</h1>
    <h1>{{this.user ? (this.user.first_name + ' ' + this.user.last_name) : ''}}</h1>
  `
})
export class ViewUserComponent implements OnInit, OnDestroy {
  isAlive: boolean;
  user: User;

  constructor(private router: ActivatedRoute, private repository: RepositoryService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  fetchData(): void {
    const user$ = this.router.params.pipe(map(data => data.id), takeWhile(() => this.isAlive), switchMap((id) => {
        return this.repository.getUserById(id);
      }), filter(res => !!res)
    );
    user$.subscribe((data: User) => this.user = data);
  }


}
