import { View, Text, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'

export default function PaymentDetailsForm() {

  const onNext = () => {
    // validate the form

    // redirect next
    router.push('/checkout/confirm')
  }

  return (
    <KeyboardAwareScrollView>
      <CustomButton title='Payment Details' onPress={onNext} style={styles.button}/>
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
    marginBottom: 10
  }
})