import React from 'react';
import { Login, SignUp } from '../screens';

const authStack = (Stack) => {
  return (
    <>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </>
  )
}

export default authStack;