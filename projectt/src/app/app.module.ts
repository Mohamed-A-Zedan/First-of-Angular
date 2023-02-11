import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { DesignComponent } from './design/design.component';
import { RouterModule,Routes} from '@angular/router';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule} from '@angular/common/http'
var routes:Routes = [{path:"",component:HomeComponent},
{path:"profile",component:ProfileComponent},
{path:"error",component:ErrorComponent},
{path:"users/:id",component:DetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ErrorComponent,
    DesignComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

