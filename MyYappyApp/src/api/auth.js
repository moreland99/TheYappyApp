// src/api/auth.js
import { auth } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Function to handle user registration
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User registered with email:', userCredential.user.email);
    return userCredential;
  } catch (error) {
    console.error('Sign up error:', error.message);
    throw error;
  }
};

// Function to handle user login
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user.email);
    return userCredential;
  } catch (error) {
    console.error('Sign in error:', error.message);
    throw error;
  }
};

// Function to handle user logout
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Sign out error:', error.message);
    throw error;
  }
};
