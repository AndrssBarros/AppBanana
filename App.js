import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/babana.gif')} style={{ width: 200, height: 200 }} />
      <Text style={{ color: '#fff' }}>Welcome my firt app Expo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
