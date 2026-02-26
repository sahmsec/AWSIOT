export interface IStorage {
  // No storage operations required
}

export class MemStorage implements IStorage {
  constructor() {}
}

export const storage = new MemStorage();
