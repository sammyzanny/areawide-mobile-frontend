import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = event => {
    event.preventDefault();
    const reqObj = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            user: this.state
        })
    }
    fetch('https://animal-swapping-api.herokuapp.com/auth', reqObj)
        .then(response => response.json())
        .then(data =>  {
            if (data.message) {
                alert(data.message)
              } else {
                  localStorage.setItem("token", data.jwt)
                this.props.login(data.user)
                this.props.history.push('/')
              }
            
        });
    setUsername("");
    setPassword("");
  }

  const signUpRedirect = () => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <form onSubmit={handleOnSubmit}>
        <input name="username" placeholder="Username/Email" type="text" onChange={event => setUsername(event.target.value)}></input>
        <input name="password" placeholder="Password" type="text" onChange={event => setUsername(event.target.value)}></input>
        <button type="submit">Login</button>
      </form>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <button onClick={signUpRedirect} >Sign Up</button>
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
