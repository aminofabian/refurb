import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView } from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigations from './Apps/Navigations/TabNavigations';



export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_cXVpZXQtc3dpbmUtNTkuY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <SafeAreaView className="flex-1 bg-sky-50">
        <StatusBar style="auto" />
        <SignedIn>
          <NavigationContainer>
            <TabNavigations />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>

      </SafeAreaView>

    </ClerkProvider>


  );
}