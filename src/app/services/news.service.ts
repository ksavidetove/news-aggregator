import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getHeadline(query: any): Observable<any> {
    const options = {
      headers: {
        'Authorization': `Bearer ${environment.clientId}`
      }
    };

    return this.http.get('/api/news/headlines', options as any);
  }
}
