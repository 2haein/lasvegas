/**
 * @flow strict-local
 * @format
 */

//import type {Node} from 'react';
import {Platform, Text} from 'react-native';
import React from 'react';
import LoginStyle from './LoginStyle';

/** const Login = Platform.select({
//const Login: () => Node = Platform.select({
  ios: () => (
    <Text>
      IOS : Login Scene.
    </Text>
  ),
  default: () => (
    <Text>
      ANDROID : Login Scene.
    </Text>
  ),
});*/

const Login = Platform.select({
  default: () => (
    <Text style={[LoginStyle.TitleText]}>ANDROID : Login Scene.</Text>
  ),
  
});

export default Login;
