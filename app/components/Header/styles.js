import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  gearImage: {
    width: 30,
    height: 30,
    alignItems: 'flex-end',
  },
});

export default styles;
