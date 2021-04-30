import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BookManagerModule } from './book-manager/book-manager.module';
import { HttpClientModule } from '@angular/common/http';
import { BooksEffects } from './+state/books.effects';
import * as fromBooks from './+state/books.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BookManagerModule,
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromBooks.BOOKS_FEATURE_KEY, fromBooks.reducer),
    EffectsModule.forFeature([BooksEffects]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
