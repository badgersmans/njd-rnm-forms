import { Text, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'

export default function ConfirmDetailsForm() {

  const onNext = () => {
    // validate the form

    // submit the data

    // redirect next
    router.dismissAll()
    router.back()
  }

  return (
    <KeyboardAwareScrollView>
      <Text>Confirm submission</Text>
      <CustomButton title='Submit' onPress={onNext} style={styles.button}/>
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