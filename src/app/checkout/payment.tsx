import { View, Text, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

export default function PaymentDetailsForm() {

  const onNext = () => {
    // validate the form

    // redirect next
    router.push('/checkout/confirm')
  }

  return (
    <View style={styles.container}>
      <CustomButton title='Payment Details' onPress={onNext} style={styles.button}/>
    </View>
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