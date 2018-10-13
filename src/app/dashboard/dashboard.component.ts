import { Component } from '@angular/core';
import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  articles: any;

  constructor(private newsService: NewsService) {
    newsService.getHeadline('bla').subscribe(results => this.articles = results);
  }
}
