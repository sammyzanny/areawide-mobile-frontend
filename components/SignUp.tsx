import React, { useState } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

import { Text, View } from '../components/Themed';

export default function SignUp() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");




  const handleOnSubmit = e => {
    e.preventDefault();
    const reqObj = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username,
            password,
            name,
            email,
            city,
            phone
        })
    }

    if(confirmPassword === password){
        //fetch()
        setUsername("");
        setConfirmPassword("");
        setName("");
        setEmail("");
        setCity("");
        setPhone("");
    } else {
        alert("Passwords do not match")
        setConfirmPassword("");

    }
    

  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
        <TextInput placeholder="Username"  onChange={e => setUsername(e.target.value)} ></TextInput>
        <TextInput  placeholder="Password" onChange={e => setPassword(e.target.value)}></TextInput>
        <TextInput  placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)}></TextInput>
        <TextInput  placeholder="Name" onChange={e => setName(e.target.value)}></TextInput>
        <TextInput  placeholder="Email" onChange={e => setEmail(e.target.value)}></TextInput>
        <TextInput  placeholder="City" onChange={e => setCity(e.target.value)}></TextInput>
        <TextInput  placeholder="Phone Number" onChange={e => setPhone(e.target.value)}></TextInput>
        <Button title="Register" onPress={handleOnSubmit}></Button>
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
