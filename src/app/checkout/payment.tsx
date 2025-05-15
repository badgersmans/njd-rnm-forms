import { View, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import CustomTextInput from '../../components/CustomTextInput'
import { PaymentInfo, PaymentInfoSchema } from '../../context/CheckoutFormProvider'

export default function PaymentDetailsForm() {
    const form = useForm<PaymentInfo>({
      resolver: zodResolver(PaymentInfoSchema)
    })
    const {formState: { errors }, handleSubmit} = form

  const onNext: SubmitHandler<PaymentInfo> = () => {
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