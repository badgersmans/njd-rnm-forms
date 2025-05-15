import { View, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import CustomTextInput from '../../components/CustomTextInput'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const PersonalInfoSchema = z.object({
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
    .max(20, { message: 'Postal code is too long!' }),

  phone: z.string({ message: 'Phone is required!' })
    .min(10, { message: 'Number is required!' })
    .max(11, { message: 'Number is too long!' }),
});

type PersonalInfo = z.infer<typeof PersonalInfoSchema>

export default function PersonalDetailsForm() {
  const form = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema)
  })
  const {formState: { errors }, handleSubmit} = form

  // console.log(errors)

  const onNext: SubmitHandler<PersonalInfo> = (data) => {
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