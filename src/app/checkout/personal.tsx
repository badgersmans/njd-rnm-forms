import { View, Text, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

export default function PersonalDetailsForm() {

  const onNext = () => {
    // validate the form

    // redirect next
    router.push('/checkout/payment')
  }

  return (
    <View style={styles.container}>
      <CustomButton title='Next' onPress={onNext} style={styles.button}/>
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