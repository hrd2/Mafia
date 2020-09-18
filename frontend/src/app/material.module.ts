import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
​
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule}  from '@angular/material/sidenav';
​import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ],
})

export class MaterialModule {}