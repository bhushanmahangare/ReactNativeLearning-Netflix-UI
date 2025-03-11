import {StyleSheet} from 'react-native';
import {COLORS} from '../../atoms/colors';

export const styles = StyleSheet.create({
  borderRadius: {
    borderRadius: 16,
  },

  container: {
    position: 'relative',
    aspectRatio: 3 / 4,
    marginVertical: 16,
  },

  gredientContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    gap: 8,
  },

  gredient: {
    width: '99%',
    height: '99%',
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 8,
    marginRight: 16,
    bottom: 0,
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
  },
  posterImage: {
    width: 400,
    height: 400,
    borderRadius: 8,
    marginRight: 16,
  },
});
