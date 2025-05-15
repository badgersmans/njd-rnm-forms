import { View, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import CustomTextInput from '../../components/CustomTextInput'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'
import { useForm, SubmitHandler, Controller } from "react-hook-form"

export default function PersonalDetailsForm() {
  const {
    handleSubmit, 
    formState: {errors},
    control,
  } = useForm()

  console.log(errors)

  const onNext = () => {
    // validate the form

    // redirect next
    router.push('/checkout/payment')
  }

  return (
    <KeyboardAwareScrollView>

      <Controller 
        control={control}
        name='fullName'
        rules={{required: 'Name is required'}}
        render={({field: {value, onChange, onBlur}}) => (
          <CustomTextInput 
            value={value} 
            onChangeText={onChange} 
            onBlur={onBlur} 
            label="Full name" 
            placeholder='Tuk Kun'
          />
        )}
      />

      <CustomTextInput 
        label="Address" 
        placeholder='Bangkok'
        multiline={true}
        style={{minHeight: 80}}
      />

      <View style={{flexDirection: 'row', gap: 20}}>
        <CustomTextInput label="City" placeholder='City' containerStyle={{flex: 1}} />
        <CustomTextInput label="Postcode" placeholder='1234' containerStyle={{flex: 1}}/>
      </View>

      <CustomTextInput label="Phone number" placeholder='12345678' inputMode='tel'/>

      <CustomButton title='Next' onPress={handleSubmit(onNext)} style={styles.button}/>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto',
  }
})