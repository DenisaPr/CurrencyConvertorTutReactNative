import React, { Component } from 'react';
import {
  ScrollView, StatusBar, Platform, Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { connectAlert } from '../components/Alert';

import { ListItem, Separator } from '../components/List';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handleThemesPress = () => {
    // console.log('theme pressed');
    const { navigation } = this.props;
    navigation.navigate('Themes', { title: 'Themes' });
  };

  handleSitePress = () => {
    // console.log('site pressed');
    const propsOpt = this.props;
    Linking.openURL('htt22222p://fixer.io').catch(() => propsOpt.alertWithType(
      'error',
      'Sorry!',
      "Page can't be open right now!",
    ));
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={(
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
)}
        />

        <Separator />

        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={(
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
)}
        />

        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
