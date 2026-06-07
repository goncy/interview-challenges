export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Page {
  items: User[];
  total: number;
}
