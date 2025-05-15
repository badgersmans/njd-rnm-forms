import { View, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import CustomTextInput from '../../components/CustomTextInput'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"

export default function PersonalDetailsForm() {
  const form = useForm()
  const {formState: { errors }, handleSubmit} = form

  console.log(errors)

  const onNext: SubmitHandler<any> = (data) => {
    // validate the form
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
          <CustomTextInput name='city' label="City" placeholder='City' containerStyle={{flex: 1}} />
          <CustomTextInput name='postcode' label="Postcode" placeholder='1234' containerStyle={{flex: 1}}/>
        </View>

        <CustomTextInput name='phone' label="Phone number" placeholder='12345678' inputMode='tel'/>

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