import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  content: {
    alignItems: 'center',
    boxShadow: 'rgba(28, 28, 28, 0.12) 0px 4px 18px 0px',
    borderRadius: 16,
    flex: 1,
    gap: 8,
  },
  image: {
    aspectRatio: 1.8,
    width: '100%',

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    objectFit: 'cover',
  },
  details: {
    display: 'flex',
    gap: 6,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  left: {
    maxWidth: 250,
  },

  right: {},

  rating: {
    backgroundColor: 'rgb(58, 183, 87)',
    paddingHorizontal: 8,
    borderRadius: 4,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    alignItems: 'center',
  },

  ratingText: {
    textAlign: 'right',
    color: '#fff',
  },
  ratingIcon: {
    width: 10,
    aspectRatio: 1,
  },
  name: {
    maxWidth: 200,
  },
  category: {},
  price: {},
  time: {
    marginTop: 8,
  },
});
