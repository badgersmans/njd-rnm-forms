import { createContext, PropsWithChildren, useContext, useState } from 'react';

type CheckoutFormContext = {};

const CheckoutFormContext = createContext<CheckoutFormContext>({});

export default function CheckoutFormProvider({ children }: PropsWithChildren) {
	return (
    <CheckoutFormContext.Provider value={{}}>
      {children}
    </CheckoutFormContext.Provider>
  );
}

export const useCheckoutForm = () => useContext(CheckoutFormContext);