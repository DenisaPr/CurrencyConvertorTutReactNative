import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeConainerSize: imageWidth,
  $largeImageSize: imageWidth / 3,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,

  container: { alignItems: 'center' },
  logoBackgroundImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$smallContainerSize',
    height: '$smallContainerSize',
  },
  logoImage: {
    width: '$largeImageSize',
  },
  logoText: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',
  },
});
