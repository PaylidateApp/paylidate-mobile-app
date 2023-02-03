import { StyleSheet, Text, View } from 'react-native';
import Logo from "./Pages/Signup/Logo";
import Input from "./Pages/Signup/Input";
import SignUp from "./Pages/Signup/SignUp";
import ResetPassword from './Pages/Signup/ResetPassword';
import ResetInput from './Pages/Signup/ResetInput';


export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Input/>
      <SignUp/>
      <ResetPassword/>
      <ResetInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EB6117',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
