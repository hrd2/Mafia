import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppRoutingModule, RequireLogin } from './app-routing.module';

import { AppComponent } from '../component/app/app.component';
import { LoginComponent } from '../component/login/login.component';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { NotFoundComponent } from '../component/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent,
        SidebarComponent,
        DashboardComponent,
        NotFoundComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    providers: [
        RequireLogin
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
