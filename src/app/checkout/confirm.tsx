import { Text, StyleSheet, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import KeyboardAwareScrollView from '../../components/KeyboardAwareScrollView'

const personalInfo = {
  "fullName": "Shawn Law",
  "address": "Bangkok",
  "city": "Khao San Road",
  "postcode": "1234",
  "phone": "60123123123",
  "country": "MY"
}

const paymentInfo = {
  "cardNumber": "1234123412341234",
  "expires": "01/30",
  "cvv": "123"
}

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

      <View style={{ gap: 20, flex: 1 }}>
        {personalInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Personal</Text>
              <Link
                href={'/checkout'}
                style={{ color: '#005055', fontWeight: '600' }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(personalInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </View>
        )}

        {paymentInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Payment</Text>
              <Link
                href={'/checkout/payment'}
                style={{ color: '#005055', fontWeight: '600' }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(paymentInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </View>
        )}
      </View>

      <CustomButton title='Submit' onPress={onNext} style={styles.button} />
    </KeyboardAwareScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    paddingBottom: 25,
    gap: 15,
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    borderRadius: 10,
    gap: 3,
  },
  dataContainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 10
  }
});