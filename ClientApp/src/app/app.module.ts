import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatToolbarModule, MatExpansionModule, MatInputModule, MatButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { AddComponent  } from './overview/add/add.component';
import { ModifyComponent } from './overview/modify/modify.component';
import { StatsComponent } from './overview/stats/stats.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'overview/add', component: AddComponent },
  { path: 'overview/modify', component: ModifyComponent },
  { path: 'overview/stats', component: StatsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OverviewComponent,
    AddComponent,
    ModifyComponent,
    StatsComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule, MatExpansionModule, MatInputModule, MatToolbarModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
