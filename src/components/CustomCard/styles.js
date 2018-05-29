import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
  },

  contLeft: {
    flex: 1,
    maxWidth: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',

  },

  placeholderImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },

  imgStyle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#BDC3C7',
  },

  contRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    paddingLeft: 20,
    paddingRight: 20,
  },

  txtTitle: {
    fontSize: 15,
    fontFamily: 'Open Sans',
  },
});

export default styles;
