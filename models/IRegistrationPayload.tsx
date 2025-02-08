interface IRegistrationPayload {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    role: string;
}

export type GeneralInformationStepPayload = Pick<IRegistrationPayload, 'email' | 'password'>;