import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  const [nightMode, setNightMode] = useState(false);

  console.log('ocarai: ', nightMode);

  
  function handleActiveNightMode() {
    setNightMode(!nightMode)
  }

  return (
    <View style={{flex: 1, backgroundColor: nightMode ? '#191622' : '#fff'}}>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle="light-content" 
      />
      <Home 
        setNightModeFunction={handleActiveNightMode}
        nightModeState={nightMode}
      />
    </View>
  );
}
