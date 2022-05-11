import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Button, Gap, Header, TextInput } from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={"Sign In"}/>
      <View style={styles.contentWrapper}>
        <TextInput title="Email Address" placeholder="Type your email address"/>
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button title="Sign In"onPress={() => navigation.navigate('Home')}/>
        <Gap height={12} />
        <Button title="Create New Account" color='#8D92A3' textColor='white' onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,

  }
});


// import React, {useState} from 'react';
// import {View, ScrollView, StyleSheet} from 'react-native';
// import {Header, TextInput, Button, Giverpanambunan} from '../../components';

// import Home from '../../pages';
// import firebase from '../../config/Firebase';

// function SignIn({navigation}) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmit = () => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(userCredential => {
//         // Signed in
//         var user = userCredential.user;
//         // console.log(user);

//         navigation.replace('Home');
//       })
//       .catch(error => {
//         var errorCode = error.code;
//         var errorMessage = error.message;

//         console.log(errorCode);
//         console.log(errorMessage);
//       });
//   };

//   return (
//     <ScrollView style={{flex: 1}}>
//       <Header title="Sign In" />
//       <View style={styles.contentWrapper}>
//         <TextInput
//           label="Email Address"
//           placeholder="Input your email"
//           value={email}
//           onChangeText={setEmail}
//         />

//         <Giverpanambunan height={16} />

//         <TextInput
//           label="Password"
//           placeholder="Input your password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry={true}
//         />

//         <Giverpanambunan height={24} />

//         <Button text="Sign In" onPress={onSubmit} />

//         <Giverpanambunan height={12} />

//         <Button
//           text="Create New Account"
//           color="#8D92A3"
//           textColor="#FFFFFF"
//           onPress={() => navigation.navigate('SignUp')}
//         />
//       </View>
//     </ScrollView>
//   );
// }

// export default SignIn;

// const styles = StyleSheet.create({
//   contentWrapper: {
//     flex: 1,
//     marginTop: 24,
//     paddingTop: 26,
//     paddingHorizontal: 24,
//     backgroundColor: 'white',
//   },
// });
