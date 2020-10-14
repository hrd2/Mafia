import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppRoutingModule, RequireLogin, RequireGuest } from './app-routing.module';

import { AppComponent } from '../component/app/app.component';
import { LoginComponent } from '../component/login/login.component';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { NotFoundComponent } from '../component/not-found/not-found.component';

import { UserService } from '../service/user/user.service';

export function appInitializer(userService: UserService) {
    return () => userService.loadDefault();
}

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
        RequireLogin,
        RequireGuest,
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializer,
            deps: [UserService],
            multi: true
        }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
