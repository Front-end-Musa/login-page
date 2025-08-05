export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string
  image: string;
  birthDate: string;
  accessToken?: string; // Optional token for authentication
}

export interface loginCredentials {
  username: string;
  password: string;
}