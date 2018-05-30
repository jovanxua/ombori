import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
  },

  contLeft: {
    flex: 0,
  },

  placeholderImg: {
  },

  imgStyle: {
    width: 78,
    height: 78,
    borderRadius: 100,
  },

  contRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    paddingLeft: 25,
    paddingRight: 20,
  },

  txtTitle: {
    fontSize: 15,
    fontFamily: 'Open Sans',
  },
});

export default styles;
