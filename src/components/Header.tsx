import React, { useEffect, useRef } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, ViewProps } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FeatherInterface from 'react-native-vector-icons/Feather';
interface HeaderProps {
  nightModeState: boolean;
  setNightModeFunction: () => void;
}

// interface FeatherProps extends FeatherInterface {
//   actived: boolean;
// }

export function Header({ setNightModeFunction, nightModeState }: HeaderProps) {
  const toggleActiveRef = useRef<FeatherProps>(null);
  
  // function handleNightModeToggle() {
  //   toggleActiveRef.current.actived = !toggleActiveRef.current.actived;
  // }

  useEffect(() => {
    toggleActiveRef.current.actived = false;
  }, []);

  return (
    <View style={[styles.header, { backgroundColor: nightModeState ? '#191932': '#273FAD'}]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>

      <TouchableOpacity 
        style={styles.NightModeButton} 
        onPress={setNightModeFunction}
        activeOpacity={1}
        > 
        <FeatherIcon name="toggle-left" 
          style={[styles.FeatherIcon,
          {display: nightModeState ? 'none': 'flex'}]}
        />
        <FeatherIcon name="toggle-right"
          ref={toggleActiveRef}
          style={[styles.FeatherIconActived,
          { display: nightModeState ? 'flex': 'none' }]}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  NightModeButton: {
    position: 'absolute',
    right: 44,
    flexDirection: 'row',
  },
  FeatherIcon: {
    fontSize: 24,
    color: '#fff',
  },
  FeatherIconActived: {
    // display: props.actived ? 'flex': 'none',
    fontSize: 24,
    color: '#fff',
  } 
});
