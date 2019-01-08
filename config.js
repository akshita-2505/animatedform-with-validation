import React, {Component} from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import {StyleSheet,View} from "react-native";

export default class App extends React.Component {

    render() {
        return (
            <AppNavigator/>
        );
    }
}
