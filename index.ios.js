/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Index from "./app/index";

export default class GaomuTest extends Component {
  render() {
    return (
      <Index />
    );
  }
}

AppRegistry.registerComponent('GaomuTest', () => GaomuTest);
