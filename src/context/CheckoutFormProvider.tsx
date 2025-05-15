import { createContext, PropsWithChildren, useContext, useState } from 'react';
import * as z from 'zod';

export const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: 'Full name is required!' })
    .min(1, { message: 'Full name must be longer than 1' })
    .trim(),

  address: z.string()
    .min(1, { message: 'Please provide your address!' })
    .max(60, { message: 'Your address is too long!' }),

  city: z.string()
    .min(1, { message: 'City is required!' })
    .max(60, { message: 'City is too long!' }),

  postcode: z.string()
    .min(1, { message: 'Postal code is required!' })
    .max(16, { message: 'Postal code is too long!' }),

  phone: z.string({ message: 'Phone is required!' })
    .min(10, { message: 'Number is required!' })
    .max(11, { message: 'Number is too long!' }),
});

export const PaymentInfoSchema = z.object({
  cardNumber: z
    .string({ message: 'Card number is required' })
    .length(16, "Invalid card number")
    .trim(),

  expires: z
    .string({ message: 'Expiry date is required' })
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Please write as MMYY format"),
   
  cvv: z
    .coerce
    .number({message: 'CVV is required'})
    .min(100, { message: 'CVV is required' })
    .max(999, { message: 'Invalid CVV' })
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>
export type PaymentInfo = z.infer<typeof PaymentInfoSchema>

type CheckoutFormContext = {
  personalInfo: PersonalInfo | undefined, 
  setPersonalInfo: (val: PersonalInfo | undefined) => void,
  paymentInfo: PaymentInfo | undefined, 
  setPaymentInfo: (val: PaymentInfo | undefined) => void
};

const CheckoutFormContext = createContext<CheckoutFormContext>({
  personalInfo: undefined,
  setPersonalInfo: () => {},
  paymentInfo: undefined,
  setPaymentInfo: () => {}
});

export default function CheckoutFormProvider({ children }: PropsWithChildren) {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | undefined>()
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | undefined>()

	return (
    <CheckoutFormContext.Provider value={{
      personalInfo, 
      setPersonalInfo,
      paymentInfo, 
      setPaymentInfo
    }}>
      {children}
    </CheckoutFormContext.Provider>
  );
}

export const useCheckoutForm = () => useContext(CheckoutFormContext);