export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
};

export type Role = 'ADMIN' | 'USER'

export type File = {
  id: string;
  name: string;
  owner: number;
  sharedTo?: number;
};
