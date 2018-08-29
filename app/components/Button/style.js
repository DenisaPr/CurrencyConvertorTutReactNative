import EStyleSheet from 'react-native-extended-stylesheet';

const logoWidth = 25;

export default EStyleSheet.create({
  $buttonBackgroundColor: '$white',
  $buttonBackgroundModifier: 0.1,

  buttonContainer: {
    backgroundColor: '$primaryBlue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    flexDirection: 'row',
  },

  imageButton: {
    width: logoWidth,
    height: logoWidth,
    marginRight: 15,
  },

  textButton: {
    color: '$white',
    fontWeight: '300',
    fontSize: 18,
  },
});
