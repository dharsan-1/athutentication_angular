import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule ,allAppRouting} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { CredentialsService } from './Services/credentials.service';
import {AngularFireModule} from '@angular/fire/compat';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    allAppRouting
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBi191D3PmxOagFS6ol04ZY5vLt6IQQ0SY",
      authDomain: "newpro-d0492.firebaseapp.com",
      databaseURL: "https://newpro-d0492-default-rtdb.firebaseio.com",
      projectId: "newpro-d0492",
      storageBucket: "newpro-d0492.appspot.com",
      messagingSenderId: "4913953739",
      appId: "1:4913953739:web:6af8975f31f3e47f7f544e",
      measurementId: "G-3JDZ9VZ0V2",
    }),
    MatTableModule
  ],
  providers: [CredentialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
