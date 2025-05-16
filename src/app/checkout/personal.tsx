import { View, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import CustomTextInput from '../../components/CustomTextInput'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { PersonalInfo, PersonalInfoSchema, useCheckoutForm } from '../../context/CheckoutFormProvider'

export default function PersonalDetailsForm() {
  const {setPersonalInfo, personalInfo} = useCheckoutForm()

  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: personalInfo
  })

  const {formState: { errors }, handleSubmit} = form

  // console.log(errors)

  const onNext: SubmitHandler<PersonalInfo> = (data) => {
    // the data is already valid
    setPersonalInfo(data)
    console.log(data)

    // redirect next
    router.push('/checkout/payment')
  }

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>

        <CustomTextInput 
          name='fullName'
          label="Full name" 
          placeholder='Tuk Kun'
        />

        <CustomTextInput
          name='address'
          label="Address" 
          placeholder='Bangkok'
          multiline={true}
          style={{minHeight: 80}}
        />

        <View style={{flexDirection: 'row', gap: 20}}>
          <CustomTextInput 
            name='city'
            label="City"
            placeholder='City'
            containerStyle={{flex: 1}}
          />
          <CustomTextInput 
            name='postcode'
            label="Postcode"
            placeholder='1234'
            inputMode='numeric'
            containerStyle={{flex: 1}}
          />
        </View>

        <CustomTextInput 
          name='phone' 
          label="Phone number" 
          placeholder='0192345678' 
          inputMode='numeric'
        />

        <CustomButton title='Next' onPress={handleSubmit(onNext)} style={styles.button}/>
      </FormProvider>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto',
  }
})