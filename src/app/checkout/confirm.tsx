import { View, Text, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

export default function ConfirmDetailsForm() {

  const onNext = () => {
    // validate the form

    // submit the data

    // redirect next
    router.dismissAll()
    router.back()
  }

  return (
    <View style={styles.container}>
      <Text>Confirm submission</Text>
      <CustomButton title='Submit' onPress={onNext} style={styles.button}/>
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