import { View, Text, Button } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../modules/redux/slices/CounterSlice';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        title="Login"
        onPress={() => {
          dispatch(loginUser(true));
        }}
      />
    </View>
  );
};

export default Login;
