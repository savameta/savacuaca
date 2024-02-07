class LocalStorage {
  // Create operation
  static createItem<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Read operation
  static readItem<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Update operation
  static updateItem<T>(key: string, newData: T): boolean {
    if (localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(newData));
      return true; // Update successful
    }
    return false; // Key not found
  }

  // Delete operation
  static deleteItem(key: string): boolean {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      return true; // Delete successful
    }
    return false; // Key not found
  }
}
