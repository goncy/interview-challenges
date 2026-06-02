export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  active: boolean;
}
