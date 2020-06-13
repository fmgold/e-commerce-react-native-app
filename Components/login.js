import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { Avatar } from "react-native-elements";

export default function Login() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
      <Avatar
      size="medium"
      icon={{name: 'user', type: 'font-awesome', color: '#298ee0'}}
      onPress={() => console.log("Works!")}
      activeOpacity={0.7}
      containerStyle={styles.avatar}
      />
      </View>
      <View style={styles.logoContainer}>
      <Text style={styles.logoText}>E-Shop</Text>
      </View>
      <View style={styles.formContainer}>
      <Text style={styles.loginheaderText}>Log In</Text>
        <TextInput label='Email' style={styles.input} placeholder='Username or Email' />
        <TextInput label='Password' style={styles.input} placeholder='Password' secureTextEntry={true}/>
        <TouchableOpacity style={styles.button}> 
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.loginfooterText}>Don't have an account? Sign Up</Text>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e9f3',
    padding: 15
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 200
  },
  avatar: {
      marginTop: 50,
      backgroundColor: '#ffffff',
      borderRadius: 10,
    },
    formContainer: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      height: 200
    },
    loginheaderText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
      paddingBottom: 30,
      textAlign: 'left',
    },
    input: {
      paddingHorizontal: 10,
      width: 350,
      height: 50,
      borderColor: '#dbe5e3',
      backgroundColor: '#ffffff',
      borderWidth: 1,
      marginBottom: 20,
      borderRadius: 5,
      shadowColor: '#14588f',
      shadowRadius: 6.5,
      elevation: 12,
      shadowOpacity: 0.35,
      shadowOffset: {
      width: 0,
      height: 5,
    }
    },
    button: {
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "#298ee0",
      padding: 10,
      width: 350,
      height: 60,
      borderRadius: 5,
      shadowColor: '#14588f',
      shadowRadius: 6.5,
      elevation: 12,
      shadowOpacity: 0.35,
      shadowOffset: {
      width: 0,
      height: 5,
    }
    },
    loginText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      width: 100,
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 100,
      marginLeft: 120,
    },
    logoText: {
      color: '#298ee0',
      fontSize: 18,
      fontWeight: 'bold'
       },
    loginfooterText: {
      marginTop: 20,
    }
});
