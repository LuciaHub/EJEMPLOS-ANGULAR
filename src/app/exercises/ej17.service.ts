import { InjectionToken } from '@angular/core';

export class StorageManager {
  constructor(private storage: Storage) { }
  get(key: string): any {
    const item = this.storage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }
  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }
  remove(key: string) {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
}

export const LOCAL_STORAGE_MANAGER = new InjectionToken<StorageManager>('LocalStorageManager', {
  providedIn: 'root',
  factory: () => {
    debugger;
    return new StorageManager(window.localStorage)
  }
});

export const SESSION_STORAGE_MANAGER = new InjectionToken<StorageManager>('SessionStorageManager', {
  providedIn: 'root',
  factory: () => {
    debugger;
    return new StorageManager(window.sessionStorage)
  }
});


class MemoryStorage implements Storage {
  private data = new Map<string, string>();
  length = 0;
  clear(): void {
    this.data.clear();
  }
  getItem(key: string): string | null {
    return this.data.get(key) || null;
  }
  key(index: number): string | null {
    throw new Error("Method not implemented.");
  }
  removeItem(key: string): void {
    if (this.data.has(key)) {
      this.data.delete(key);
      this.length--;
    }
  }
  setItem(key: string, value: string): void {
    this.data.set(key, value.toString());
    this.length++;
  }
}

export const MEMORY_STORAGE_MANAGER = new InjectionToken<StorageManager>('MemoryStorageManager', {
  providedIn: 'root',
  factory: () => {
    debugger;
    return new StorageManager(new MemoryStorage())
  }
});
