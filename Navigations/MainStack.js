
import React from 'react'
import { MyNetworkScreen, UserProfileScreen, VerifyAccount, VerifyMe, SendFunds, Settings, ResetInput, PayBills, Airtime, DataBundle, Internet, MyCommunityScreen, AddCardScreen, ActiveCardScreen, MyDeals } from '../screens';
import CreatePost from '../components/CreatePost';
import Tabs from '../components/tabs';
import PostItem from '../components/CreatePost';

const MainStack = (Stack) => {
    return (
        <>
            <Stack.Screen name="DashboardScreen" component={Tabs} />
            <Stack.Screen name="ResetInput" component={ResetInput} />
            <Stack.Screen name="PayBills" component={PayBills} />
            <Stack.Screen name="MyNetworkScreen" component={MyNetworkScreen} />
            <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
            <Stack.Screen name='MyCommunityScreen' component={MyCommunityScreen} />
            <Stack.Screen name='CreatePost' component={CreatePost} />
            <Stack.Screen name='AddCardScreen' component={AddCardScreen} />
            <Stack.Screen name='ActiveCardScreen' component={ActiveCardScreen} />
            <Stack.Screen name="SendFunds" component={SendFunds} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Airtime" component={Airtime} />
            <Stack.Screen name="Internet" component={Internet} />
            <Stack.Screen name="DataBundle" component={DataBundle} />
            <Stack.Screen name="VerifyMe" component={VerifyMe} />
            <Stack.Screen name="Post" component={PostItem} />
            <Stack.Screen name="MyDeals" component={MyDeals} />
        </>
    )
}

export default MainStack;