import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import Upload from '../components/Upload';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {

  const signUpRedirect = () => {

  }

  return (
    <View style={styles.container}>
      <Upload />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
