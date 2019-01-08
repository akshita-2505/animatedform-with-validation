import React, {Component} from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import Login from '../components/login';
import Registration from '../components/registration';

const AppNavigator = createStackNavigator({
    Login:Login,
    Registration:Registration
});

export default createAppContainer(AppNavigator);