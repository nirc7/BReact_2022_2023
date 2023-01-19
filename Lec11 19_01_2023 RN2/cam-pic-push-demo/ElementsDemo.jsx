import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,  Button as Btn} from 'react-native';
import { Button } from '@rneui/themed';

export default function ElementsDemo() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Outline" type="outline" />
      <Btn title="btn"/>
      <StatusBar style="auto" />
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
