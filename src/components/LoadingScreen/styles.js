import { StyleSheet } from 'react-native';

const bgColor = '#40b217';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
  },

  contOuter: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bgColor,
  },

  contInner: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bgColor,
    position: 'absolute',
  },

  contCenter: {
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: bgColor,
    opacity: 0.5,
    zIndex: 999,
    position: 'absolute',
    left: 60,
    right: 0,
  },
});

export default styles;
