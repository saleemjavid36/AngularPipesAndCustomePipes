import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';

import { FilepipePipe } from './filepipe.pipe';
import { FileComponent } from './file/file.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    FilepipePipe,
    FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
