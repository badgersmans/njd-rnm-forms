import { View, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { useState } from 'react'
import CustomTextInput from '../../components/CustomTextInput'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'

export default function PersonalDetailsForm() {
  const [fullname, setFullname] = useState('')

  const onNext = () => {
    // validate the form

    // redirect next
    router.push('/checkout/payment')
  }

  return (
    <KeyboardAwareScrollView>
      <CustomTextInput label="Full name" placeholder='Tuk Kun'/>
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

      <CustomButton title='Next' onPress={onNext} style={styles.button}/>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto',
  }
})