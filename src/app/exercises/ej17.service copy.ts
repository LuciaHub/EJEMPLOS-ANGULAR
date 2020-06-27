import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {
  get(key: string): any {
    const item = sessionStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }
  set(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  remove(key: string) {
    sessionStorage.removeItem(key);
  }
  clear() {
    sessionStorage.clear();
  }
}
