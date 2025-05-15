import { View, Text, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import CustomTextInput from '../../components/CustomTextInput'

const PaymentInfoSchema = z.object({
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

type PersonalInfo = z.infer<typeof PaymentInfoSchema>

export default function PaymentDetailsForm() {
    const form = useForm<PersonalInfo>({
      resolver: zodResolver(PaymentInfoSchema)
    })
    const {formState: { errors }, handleSubmit} = form

  const onNext = () => {
    // validate the form

    // redirect next
    router.push('/checkout/confirm')
  }

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>

        <CustomTextInput 
          name='cardNumber'
          label="Card number" 
          placeholder='xxxx xxxx xxxx xxxx'
          inputMode='numeric'
        />

        <View style={{flexDirection: 'row', gap: 10}}>
          <CustomTextInput 
            name='expires'
            label="Expires" 
            placeholder='01/30'
            inputMode='numeric'
            containerStyle={{flex: 1}}
          />

          <CustomTextInput 
            name='cvv'
            label="CVV"
            placeholder='xxx'
            inputMode='numeric'
            containerStyle={{flex: 1}}
          />
        </View>

        <CustomButton title='Payment Details' onPress={handleSubmit(onNext)} style={styles.button}/>
      </FormProvider>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  },
  button: {
    marginTop: 'auto',
  }
})