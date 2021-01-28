import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ToDoComponent } from './components/to-do/to-do.component';
import { AccountComponent } from './components/account/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import { FormsModule } from '@angular/forms';
import { NgwWowModule } from 'ngx-wow';

const config = {
  apiKey: "AIzaSyDa286lYuz0cZBNybPZkCliy3D-8Evfi7w",
  authDomain: "myloverwebsite.firebaseapp.com",
  projectId: "myloverwebsite",
  storageBucket: "myloverwebsite.appspot.com",
  messagingSenderId: "840764472731",
  appId: "1:840764472731:web:05a07a7e813557a9a8753e",
  measurementId: "G-T2EZSKGNP3"
};

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    AccountComponent,
    AddToDoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule,
    NgwWowModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }