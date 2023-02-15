import { StyleSheet, Text, View } from 'react-native';
import Logo from "./Pages/Signup/Logo";
import Input from "./Pages/Signup/Input";
import SignUp from "./Pages/Signup/SignUp";
import ResetPassword from './Pages/Signup/ResetPassword';
import ResetInput from './Pages/Signup/ResetInput';
import ChatHeader from './Pages/Dmbuyer/ChatHeader';
import ChatInput from './Pages/Dmbuyer/ChatInput';
import ChatScreen from './Pages/Dmbuyer/ChatScreen';
import CreatePyrq from './Pages/Dmbuyer/CreatePyrq';



export default function App() {
  return (
    <View style={styles.container}>
      {/* <Logo />
      <Input/>
      <SignUp/>
      <ResetPassword/>
      <ResetInput /> */}
      {/* <ChatHeader /> */}
      {/* <Messages /> */}
      <CreatePyrq />
      {/* <ChatScreen /> */}

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
