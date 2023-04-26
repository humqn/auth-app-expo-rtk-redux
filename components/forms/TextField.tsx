import { Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { useField, useFormik } from 'formik';

export interface CommonTextFieldProps {
  name: string;
}

export const TextField: React.FunctionComponent<
  CommonTextFieldProps & React.ComponentProps<typeof Input>
> = ({ name, inputStyle, containerStyle, inputContainerStyle, ...props }) => {
  const [isFocused, setFocused] = useState(false);
  const [field, meta, helpers] = useField(name);
  const error = meta.error;

  return (
    <View>
      <Input
        autoCapitalize="none"
        inputContainerStyle={[
          styles.inputContainerStyle,
          isFocused && styles.inputContainerStyleFocused,
          !!error && styles.inputContainerStyleFocusedError,
          inputContainerStyle,
        ]}
        containerStyle={[styles.containerStyle, containerStyle]}
        inputStyle={[
          styles.inputStyle,
          !!error && styles.errorStyle,
          inputStyle,
        ]}
        labelStyle={styles.labelStyle}
        value={field.value}
        onChangeText={(text) => {
          helpers.setValue(text);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
        }}
        errorMessage={error}
        errorStyle={[props.errorStyle, !!error && styles.errorMessageStyle]}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {},
  inputStyle: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#3c3c3c',
    color: '#1c1c1f',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  labelStyle: {
    borderWidth: 0,
  },
  inputContainerStyle: {
    borderWidth: 4,
    borderColor: 'transparent',
    borderBottomWidth: 4,
  },
  inputContainerStyleFocused: {
    borderColor: '#e0dede',
    borderRadius: 10,
  },
  inputContainerStyleFocusedError: {
    borderColor: '#fce9e9',
  },
  errorMessageStyle: {
    color: 'red',
    fontWeight: 'bold',
  },
  errorStyle: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
