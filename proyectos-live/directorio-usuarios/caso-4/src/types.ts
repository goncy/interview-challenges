export interface User {
  id: number;
  name: string;
  email: string;
}

export interface BulkResult {
  succeeded: number[];
  failed: number[];
}
