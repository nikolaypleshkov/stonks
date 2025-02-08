import {
  IRegistrationPayload,
  AddressInformationStepPayload,
} from "@/models/IRegistrationPayload";

export interface FormStep {
  initialData?: Partial<IRegistrationPayload>;
  onBack: () => void;
  onDataSubmit: (data: Partial<IRegistrationPayload>) => void;
}
