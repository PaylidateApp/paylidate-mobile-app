import { StyleSheet, Text, View } from 'react-native';
import Logo from "./Pages/Signup/Logo";
import Input from "./Pages/Signup/Input";
import ResetInput from './Pages/Signup/ResetInput';
import ChatScreen from './Pages/Dmbuyer/ChatScreen';




export default function App() {
  return (
    <View style={styles.container}>
       {/* <Logo /> */}
      {/* <Input/> */}
      {/* <ResetInput /> */}
      <ChatScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#EB6117',
    backgroundColor: '#182436',
    borderColor: '#9B9B9B',
    borderWidth:3,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
