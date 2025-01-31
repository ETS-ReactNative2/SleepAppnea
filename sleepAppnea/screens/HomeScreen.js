//-------------------------------------------------------------------------------------------------
// Homescreen contains the main homepage component with a login and signup button (not yet
// implemented).
//-------------------------------------------------------------------------------------------------
import React from 'react';
import { Icon } from 'native-base';
import { Button, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

this._handleLogin = () => {
  console.log('Nothing yet!');
};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sleep Tracker Assistant</Text>
        <Icon name="cloud" style={{ color: 'white', padding: 15 }} />
        <View style={styles.buttonRow}>
          <Button
            title="Login"
            color="#906090"
            style={{ borderRadius: 5 }}
            hardwareAccelerated
            onPress={() => this._handleLogin}
          />
        </View>
        <View style={styles.buttonRow}>
          <Button
            title="Sign Up"
            color="#906090"
            style={{ borderRadius: 5 }}
            hardwareAccelerated
            onPress={() => this._handleLogin}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001848'
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttonRow: {
    width: '80%',
    marginBottom: 15,
    marginTop: 15
  },
  button: {
    padding: 25,
    fontSize: 40
  }
});
