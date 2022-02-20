import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Button, Input, Image } from 'react-native-elements';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {};

  const register = () => {};

  return (
    <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={{
          uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>LoginScreen</Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder='Email'
          type='email'
          autofocus
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          type='password'
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title='Login' />
      <Button
        containerStyle={styles.button}
        onPress={register}
        type='outline'
        title='Register'
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
