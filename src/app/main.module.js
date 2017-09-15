import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TodoStoreService } from './services/todo-store.service';
import { CourseStoreService } from './services/course-store.service';
import {
  AppComponent,
  TodoListComponent,
  TodoFooterComponent,
  TodoHeaderComponent,
  TodoItemComponent,
  CartComponent,
  NavBarComponent,
  CourseCardComponent,
  CourseListComponent,
  CourseDetailsComponent,
  CheckoutComponent
} from './components';
import { TrimPipe } from './pipes';
import { routes } from './routes';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoItemComponent,
    TrimPipe,
    CartComponent,
    NavBarComponent,
    CourseCardComponent,
    CourseListComponent,
    CourseDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    TodoStoreService,
    CourseStoreService,
    { provide: 'AUTHOR', useValue: 'Soós Gábor' }
  ]
})
export class MainModule {}
