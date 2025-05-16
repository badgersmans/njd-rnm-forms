import { useSegments } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const steps = [
  {key: 'personal', title: 'Personal'},
  {key: 'payment', title: 'Payment'},
  {key: 'confirm', title: 'Confirm'},
]

export default function CheckoutFormStepIndicator() {
  const segments  = useSegments()
  const currentScreen = segments[segments.length - 1]

  console.log(segments)

  const stepIndex = steps.findIndex(step => step.key === currentScreen)

  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flexDirection: 'row', 
        // backgroundColor: 'white', 
        justifyContent: 'space-around',
        height: 110,
        padding: 10,
        gap: 25
      }}
    >
      {steps.map((step, index) => (
        <View 
          style={{
            borderBottomWidth: 2.5,
            borderColor: stepIndex >= index ? '#005055' : 'lightgrey',
            flex: 1
          }}
          key={step.key}
        >
          <Text 
            style={{
              fontWeight: 'bold', 
              textAlign: 'center',
              color: stepIndex >= index ? '#005055' : 'grey'
            }}
          >{step.title}</Text>
        </View>
      ))} 
    </SafeAreaView>
  )
} 