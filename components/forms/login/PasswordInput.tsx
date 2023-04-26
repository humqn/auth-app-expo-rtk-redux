
import React from 'react';
import {
  Text,
} from 'react-native';
import { TextField } from '../TextField';
const PasswordInput:React.FunctionComponent = () => {
  return (
    <>
      <Text>Mot de passe</Text>
      <TextField name='password' placeholder='Mot de passe' secureTextEntry/>
    </>
  );
};



export default PasswordInput;
