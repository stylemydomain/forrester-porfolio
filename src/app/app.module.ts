
import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule }           from '@angular/platform-browser';
import { CoreModule }              from './core/core.module';
import { MatIconModule }           from '@angular/material/icon';
import { NgModule }                from '@angular/core';

// Firebase
import { AngularFireModule }      from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// lottie
import { LottieModule } from 'ngx-lottie';
import player           from 'lottie-web/build/player/lottie_light';

// my components
import { AppLottieComponent }   from './components/app-lottie/app-lottie.component';
import { DocViewComponent }     from './components/doc-view/doc-view.component';
import { DesktopIconComponent } from './components/desktop-icon/desktop-icon.component';
import { FolderItemsComponent } from './components/folder-items/folder-items.component';
import { PicViewComponent }     from './components/pic-view/pic-view.component';
import { TaskbarComponent }     from './components/taskbar/taskbar.component';
import { WindowComponent }      from './components/window/window.component';

export function playerFactory() {
  return player;
}

const firebaseConfig = {
  apiKey: "AIzaSyDUSBdLDAmaoEMnZbKFX4hmhjEZteHxXA0",
  authDomain: "forrester-angular.firebaseapp.com",
  projectId: "forrester-angular",
  storageBucket: "forrester-angular.appspot.com",
  messagingSenderId: "578715683983",
  appId: "1:578715683983:web:9aa252a4eee3aade9374fa"
};


@NgModule({
  declarations: [
    AppComponent,
    AppLottieComponent,
    DesktopIconComponent,
    DocViewComponent,
    FolderItemsComponent,
    PicViewComponent,
    TaskbarComponent,
    WindowComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    LottieModule.forRoot({ player: playerFactory }),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
