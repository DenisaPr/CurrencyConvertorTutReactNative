import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { Button } from '../components/Button';
import { ConversionDetails } from '../components/ConversionDetails';
import { Header } from '../components/Header';

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    conversionRate: PropTypes.number,
    amount: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.object,
    primaryColor: PropTypes.string,
  };

  handlePressBaseCurrency = () => {
    console.log('press base');
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote');
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote',
    });
  };

  handleTextChange = (amount) => {
    console.log('Changed text = ', amount);
    const curObj = this.props;
    curObj.dispatch(changeCurrencyAmount(amount));
  };

  handleOnPressReverseCurency = () => {
    console.log('Reversing Currency');
    const curObj = this.props;
    curObj.dispatch(swapCurrency());
  };

  handleOptionsPress = () => {
    console.log('Options pressed');
    const { navigation } = this.props;
    navigation.navigate('Options', { title: 'Options' });
  };

  render() {
    const curObj = this.props;
    let quotePrice = (curObj.amount * curObj.conversionRate).toFixed(2);

    if (curObj.isFetching) {
      quotePrice = '...';
    }

    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />

        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />

          <InputWithButton
            buttonText={curObj.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={curObj.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            textColor={this.props.primaryColor}
          />

          <InputWithButton
            buttonText={curObj.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
            textColor={this.props.primaryColor}
          />

          <ConversionDetails
            curencyConversionFrom={curObj.baseCurrency}
            curencyConversionTo={curObj.quoteCurrency}
            rateConversion={curObj.conversionRate}
            dateConversion={curObj.lastConvertedDate}
          />

          <Button
            text="Reverse Currency"
            onPress={this.handleOnPressReverseCurency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    primaryColor: state.theme.primaryColor,
  };
};

export default connect(mapStateToProps)(Home);
