import { IUser, IAddress } from '../models/IUser';

const mockAddress: IAddress = {
  address: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  zip: '12345',
  country: 'USA'
};

const mockUser: IUser = {
  id: 1,
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  phoneNumber: '555-1234',
  profileImage: 'https://avatars.githubusercontent.com/u/47944944?v=4',
  address: mockAddress,
  role: 'user',
  createdAt: '2023-01-01T00:00:00Z',
  updatedAt: '2023-01-01T00:00:00Z'
};

export default mockUser;