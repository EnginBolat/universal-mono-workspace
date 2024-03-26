import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex flex-1 justify-center items-center bg-white">
      <Text className='font-medium text-xl'>Universel Mono Repo Expo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
