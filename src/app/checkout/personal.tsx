import { View, Text, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { useState } from 'react'
import CustomTextInput from '../../components/CustomTextInput'

export default function PersonalDetailsForm() {
  const [fullname, setFullname] = useState('')

  const onNext = () => {
    // validate the form

    // redirect next
    router.push('/checkout/payment')
  }

  return (
    <View style={styles.container}>

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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    gap: 5
  },
  button: {
    marginTop: 'auto',
    marginBottom: 10
  }
})