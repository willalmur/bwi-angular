import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, AlwaysAuthGuard, OnlyLoggedInUsersGuard } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonComponent } from './button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RefreshComponent } from './refresh/refresh.component';
import { RefreshSuccessComponent } from './refresh-success/refresh-success.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProcessComponent } from './process/process.component';
import { StatusComponent } from './status/status.component';
import { CheckListComponent } from './check-list/check-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ProgressListComponent } from './progress-list/progress-list.component';
import { FailedItemsListComponent } from './failed-items-list/failed-items-list.component';

import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    WelcomeComponent,
    RefreshComponent,
    RefreshSuccessComponent,
    LoginComponent,
    ToolbarComponent,
    ProcessComponent,
    StatusComponent,
    CheckListComponent,
    ItemListComponent,
    ProgressListComponent,
    FailedItemsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDividerModule,
    ScrollingModule,
    FormsModule,
    HttpClientModule, 
    HttpClientXsrfModule,

  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDividerModule,
    ScrollingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AlwaysAuthGuard, 
    OnlyLoggedInUsersGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
