export interface IRegistrationPayload {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profileImage: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    role: string;
}

export type GeneralInformationStepPayload = Pick<IRegistrationPayload, 'email' | 'password'>;
export type ProfileInformationStepPayload = Pick<IRegistrationPayload, 'firstName' | 'lastName' | 'phoneNumber'>;
export type AddressInformationStepPayload = Pick<IRegistrationPayload, 'address' | 'city' | 'state' | 'zip' | 'country'>;