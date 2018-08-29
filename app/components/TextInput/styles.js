import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColor: '$white',
  $buttonBackgroundModifier: 0.1,

  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },
  containerDisabled: {
    backgroundColor: '$lightGrey',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    backgroundColor: '$white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderRightColor: '$border',
    borderRightWidth: 1,
  },
  buttonText: {
    color: '$primaryBlue',
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText',
  },
});
