// src/screens/Login.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { signIn } from '../api/auth';
import Logo from '../components/Logo';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      console.log('Logged in successfully!');
      // Navigate to the home screen or dashboard after login
      navigation.navigate('Home');
    } catch (error) {
      alert('Failed to log in: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
    <Logo />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholder="Password"
      />
      <Button title="Log In" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign up.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5
  }
});

export default Login;
