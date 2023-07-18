export interface NestedFile {
  id: string;
  fileName: string;
  children: null | NestedFile[];
}

export interface PlainFile {
  id: string;
  fileName: string;
  children: PlainFile["id"][];
  root?: boolean;
}
