import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

// fetch 함수
const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data: User[] = await response.json();
  return data;
};

// axios 함수
const axiosUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  const data: User[] = response.data;
  return data;
};

export { fetchUsers, axiosUsers };
