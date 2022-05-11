// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   ScrollView,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import {launchImageLibrary} from 'react-native-image-picker';
// import {showMessage} from 'react-native-flash-message';

// import {Giverpanambunan, Header} from '../../components';
// import {TextInput, Giverpanambunan, Button} from '../../components';
// import firebase from '../../config/Firebase';

// function SignUp({navigation}) {
//   const [photo, setPhoto] = useState('');
//   const [hasPhoto, setHasPhoto] = useState(false);
//   const [photoBase64, setPhotoBase64] = useState('');

//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmit = () => {
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(userCredential => {
//         // Signed in
//         var user = userCredential.user;

//         firebase
//           .database()
//           .ref('users/' + user.uid)
//           .set({
//             fullName: fullName,
//             email: email,
//             image: photoBase64,
//           });

//         showMessage({
//           message: 'Akun anda berhasil dibuat',
//           type: 'success',
//         });
//       })
//       .catch(error => {
//         var errorCode = error.code;
//         var errorMessage = error.message;

//         showMessage({
//           message: errorMessage,
//           type: 'danger',
//         });
//       });
//   };

//   const getImage = () => {
//     launchImageLibrary(
//       {maxWidth: 300, maxHeight: 300, includeBase64: true},
//       response => {
//         if (response.didCancel) {
//           showMessage({
//             message: 'Upload foto dibatalkan',
//             type: 'danger',
//           });
//           setHasPhoto(false);
//         } else {
//           setPhotoBase64(response.base64);
//           setPhoto(response.uri);
//           setHasPhoto(true);
//         }
//       },
//     );
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Header title="Sign Up" onBack={() => navigation.goBack()} />
//       <View style={styles.contentWrapper}>
//         <View style={styles.avatarWrapper}>
//           <View style={styles.border}>
//             <TouchableOpacity onPress={getImage}>
//               {hasPhoto && (
//                 <Image source={{uri: photo}} style={styles.avatar} />
//               )}
//               {!hasPhoto && (
//                 <View style={styles.addPhoto}>
//                   <Text style={styles.textAddPhoto}>Add Photo</Text>
//                 </View>
//               )}
//             </TouchableOpacity>
//           </View>
//         </View>

//         <TextInput
//           label="Full Name"
//           placeholder="Enter your full name"
//           value={fullName}
//           onChangeText={setFullName}
//         />
//         <Giverpanambunan height={16} />
//         <TextInput
//           label="Email Address"
//           placeholder="Enter your email address"
//           value={email}
//           onChangeText={setEmail}
//         />
//         <Giverpanambunan height={16} />
//         <TextInput
//           label="Password"
//           placeholder="Enter your password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry={true}
//         />
//         <Giverpanambunan height={16} />
//         <Button text={'Continue'} onPress={onSubmit} />
//       </View>
//     </ScrollView>
//   );
// }

// export default SignUp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingBottom: 3,
//   },
//   contentWrapper: {
//     paddingHorizontal: 24,
//     flex: 1,
//     marginTop: 24,
//     backgroundColor: 'white',
//   },
//   addPhoto: {
//     backgroundColor: '#f0f0f0',
//     width: 90,
//     height: 90,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 90,
//   },
//   textAddPhoto: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: 13,
//     maxWidth: 40,
//     textAlign: 'center',
//   },

//   border: {
//     width: 110,
//     height: 110,
//     borderRadius: 110,
//     borderWidth: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderStyle: 'dashed',
//   },
//   avatarWrapper: {
//     alignItems: 'center',
//     marginVertical: 26,
//   },
//   avatar: {
//     width: 90,
//     height: 90,
//     borderRadius: 90,
//   },
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Header, TextInput, Gap } from '../../components'

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
        <Header title="Sign Up" onBack={() => {navigation.goBack()}} />
        <View style={styles.contentWrapper}>
            <View style={styles.avatarWrapper}>
                <View style={styles.border}>
                 <View style={styles.addPhoto}>
                    <Text style={styles.addPhotoText}>Add Photo</Text>
                   </View>
                </View>
            </View>
            <TextInput title="Full Name" placeholder="Enter your full name"  />
            <Gap height={16} />
            <TextInput title="Email Address" placeholder="Enter your email address"  />
            <Gap height={16} />
            <TextInput title="Password" placeholder="Enter your password"  />
            <Gap height={24} />
            <Button title="Continue" onPress={() => navigation.navigate('SignIn')}/>
        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    contentWrapper: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 24,
        paddingHorizontal: 24,
    },
    addPhoto: {
        height: 90,
        width: 90,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
    },
    addPhotoText: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        maxWidth: 40,
        textAlign: 'center',
    },
    border: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed',
    },
    avatarWrapper: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16,
    }
})