import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstPage from './Pages/FirstPage';
import MaterialTabbedPageNavigator from './Pages/MaterialTabbedPageNavigator';
import SecondPage from './Pages/SecondPage';
// import TabbedPageNavigator from './Pages/TabbedPage';
// import MaterialTabbedPage from './Pages/MaterialTabbedPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="MaterialTabbedPageNavigator" component={MaterialTabbedPageNavigator} />
        {/* <Stack.Screen name="TabbedPageNavigator" component={TabbedPageNavigator} />
        <Stack.Screen name="MaterialTabbedPage" component={MaterialTabbedPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;