import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  handleThemesPress = (color) => {
    console.log('colored theme pressed', color);
  };

  render() {
    return (
      <ScrollView style={{ flex: 1, marginTop: 50 }}>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handleThemesPress(styles.$blue)}
          selected
          checkMark={false}
          iconBackground={styles.$blue}
        />
        <Separator />

        <ListItem
          text="Orange"
          onPress={() => this.handleThemesPress(styles.$orange)}
          selected
          checkMark={false}
          iconBackground={styles.$orange}
        />
        <Separator />

        <ListItem
          text="Green"
          onPress={() => this.handleThemesPress(styles.$green)}
          selected
          checkMark={false}
          iconBackground={styles.$green}
        />
        <Separator />

        <ListItem
          text="Purple"
          onPress={() => this.handleThemesPress(styles.$purple)}
          selected
          checkMark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Themes;
