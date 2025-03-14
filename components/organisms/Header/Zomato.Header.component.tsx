import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../../atoms/Text/Text.component';
import { Flexbox } from '../Flexbox/Flexbox.component';
import Avatar from '../../atoms/Avatar/Avatar.component';
import { COLORS } from '../../atoms/colors';
import { MapIcon } from '../../icons/Map.icon';
import { DropdownIcon } from '../../icons/Dropdown.icon';

export default function ZomatoHeader() {
  return (
    <Flexbox row justifyContentSpaceBetween style={styles.flexboxStyle}>
      <Flexbox style={{ flex: 1 }} gap={6} row alignItemsCenter>
        <MapIcon style={{ fill: COLORS.primary }} width={24} height={24} />
        <Flexbox gap={1}>
          <Flexbox column>
            <Flexbox row alignItemsCenter>
              <Text
                size={16}
                weight="600"
                textAlign="left"
                color={COLORS.primary}>
                Barela, Jabalpur
              </Text>
              <DropdownIcon width={24} height={24} />
            </Flexbox>
            <Text size={12} color={COLORS.textPrimary}>
              India
            </Text>
          </Flexbox>
        </Flexbox>
      </Flexbox>

      <Avatar
        rounded
        username="Bhushan"
        backgroundColor="lightblue"
        size={32}
        color={COLORS.primary}
      />
    </Flexbox>
  );
}

const styles = StyleSheet.create({
  flexboxStyle: {
    padding: 30,
    color: COLORS.primary,
    backgroundColor: COLORS.grayLight,
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
});
