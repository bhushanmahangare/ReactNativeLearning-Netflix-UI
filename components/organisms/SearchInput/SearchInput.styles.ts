import { StyleSheet } from "react-native";
import { COLORS } from "../../atoms/colors";

export const styles = StyleSheet.create({
    container: {
      margin: 10,
      gap: 8,
    },
  
    inputContainer: {
      flex: 1,
      padding: 12,
      gap: 12,
  
      borderRadius: 10,
      borderColor: '#eee',
      borderWidth: 1,
      boxShadow: '-2px 4px 24px -18px rgba(158,149,158,1)',
    },
  
    separator: {
      borderWidth: 0.6,
      borderColor: '#eee',
    },
    input: {
      flex: 1,
      height: '100%',
    },
  
    switch: {
      transform: [
        {
          scaleY: 0.5,
        },
        {
          scaleX: 0.5,
        },
      ],
      marginVertical: -7,
    },
    filterText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
    textTransform: 'uppercase',
    lineHeight: 12,
  },
});
