import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import {
  AgmCoreModule
} from '@agm/core';

import {NewsService} from './services/news.service';
import {AuthHeaderInterceptor} from './interceptors/authApi.interceptor';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [
    NewsService,
    AuthHeaderInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
