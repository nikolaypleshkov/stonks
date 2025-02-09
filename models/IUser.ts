export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  profileImage: string;
  address: IAddress;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAddress {
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
