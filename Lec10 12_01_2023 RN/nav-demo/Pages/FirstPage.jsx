import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react/cjs/react.development';

export default function FirstPage(props) {
  const [counter, setCounter] = useState(0);

  const btnAddCounter = () => {
    //debugger;
    let num = 7;
    num++;
    console.log(num);
    setCounter(prevc => prevc + 1)
  }

  return (
    <View style={styles.container}>
      <Text>Avi's app2!</Text>
      <Button title='add' onPress={btnAddCounter} />
      <Text style={{ fontSize: 30 }}>counter={counter}</Text>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('SecondPage',
          {
            userName: 'avi',
            userId: 7
          })}>
        <View style={{ margin: 15, borderRadius: 35, backgroundColor: 'black', padding: 15 }}>
          <Text style={{ fontSize: 30, color: 'red' }}>go2secpage</Text>
        </View>
      </TouchableOpacity>

      <Button title='go2tab' onPress={() => props.navigation.navigate('MaterialTabbedPageNavigator')} />

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
