import { Component, Inject } from '@angular/core';
import { SESSION_STORAGE_MANAGER, LOCAL_STORAGE_MANAGER, StorageManager } from './ej17.service';
interface Foo {
  a: string;
}
@Component({
  selector: 'ps-exercises',
  templateUrl: './exercises.component.html',
})
export class ExercisesComponent {
  value = "abc";
  show = true;
  obj?: Foo;
  constructor(
    @Inject(SESSION_STORAGE_MANAGER) private sessionManager: StorageManager,
    @Inject(LOCAL_STORAGE_MANAGER) private localManager: StorageManager
  ) {
    this.sessionManager.set('foo', 123);
    this.localManager.set('foo', 567);
  }
  onChange(reverse: string) {
    alert(reverse);
  }
}
