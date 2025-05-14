import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Home'}}/>
      <Link href={'/checkout'} asChild>
        <CustomButton title='Checkout'/>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});