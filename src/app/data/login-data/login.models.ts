export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string
  image: string;
  birthDate: string;
  token?: string; // Optional token for authentication
}

export interface loginCredentials {
  email: string;
  password: string;
}