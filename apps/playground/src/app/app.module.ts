import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromBooks from './+state/books.reducer';
import { BooksEffects } from './+state/books.effects';
import { BooksFacade } from './+state/books.facade';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';
import { BookStuffComponent } from './book-stuff/book-stuff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentStore } from '@ngrx/component-store';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookFormComponent,
    BookStuffComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
  providers: [BooksFacade, ComponentStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
