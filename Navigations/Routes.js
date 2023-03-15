import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStack from './MainStack';
import AuthStack from './AuthStack';

import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <AuthContext.Consumer>
            {({ userData }) => (
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        {userData ? MainStack(Stack)
                            : AuthStack(Stack)
                        }
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </AuthContext.Consumer>

    );
}


export default Routes;