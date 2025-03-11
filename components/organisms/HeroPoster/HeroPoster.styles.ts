import {StyleSheet} from 'react-native';
import {COLORS} from '../../atoms/colors';

export const styles = StyleSheet.create({
  borderRadius: {
    borderRadius: 16,
  },

  container: {
    position: 'relative',
    aspectRatio: 3 / 4,
  },

  gredientContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },

  gredient: {
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },

  footer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    zIndex: 9,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },

  playButton: {
    backgroundColor: COLORS.WHITE,
    flexGrow: 1,
  },
  addToListButton: {
    backgroundColor: COLORS.BUTTON_DARK,
    flexGrow: 1,
  },
  scrollContent:{
    paddingHorizontal: 16,
  }
});
