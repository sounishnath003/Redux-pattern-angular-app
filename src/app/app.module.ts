import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/Layouts/dashboard.component';
import { LayoutComponent } from './components/Layouts/layout.component';
import { HeaderComponent } from './components/Layouts/header.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './containers/post.component';
import { UserComponent } from './containers/user.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { UserListComponent } from './components/user-list.component';
import { UserCardComponent } from './components/user-card.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { ErrorComponent } from './components/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './components/update-user.component';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    PostComponent,
    UserComponent,
    UserListComponent,
    UserCardComponent,
    ErrorComponent,
    UpdateUserComponent,
    UserFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [HttpService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
