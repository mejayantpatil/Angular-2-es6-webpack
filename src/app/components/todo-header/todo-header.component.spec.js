import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TodoHeaderComponent } from './todo-header.component';
import { FormsModule } from '@angular/forms';
import { TodoStoreService } from '../../services/todo-store.service';

describe('Testing Todo Header component', ()=> {
  let comp: TodoHeaderComponent;
  let fixture: ComponentFixture<TodoHeaderComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let de1: DebugElement;
  let el1: HTMLElement;

  beforeEach(()=> {
      TestBed.configureTestingModule({
        imports: [ FormsModule ],
        declarations: [ TodoHeaderComponent ],
        providers: [ TodoStoreService ]
      });
      fixture = TestBed.createComponent(TodoHeaderComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('h1'));
      el = de.nativeElement;
      de1 = fixture.debugElement.query(By.css('input'));
      el1 = de1.nativeElement;
  });

  it('Title todo test', ()=> {
    expect(el.textContent).toContain('Todos');
  });

  it('Title test ok', ()=> {
    comp.newTodo = 'Todos';
    fixture.detectChanges();
    expect(comp.newTodo).toContain('Todos');
  });
});
