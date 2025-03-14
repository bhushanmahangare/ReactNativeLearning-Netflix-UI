import { useState } from 'react';
import { styles } from './SearchInput.styles';
import { Flexbox } from '../Flexbox/Flexbox.component';
import { View, Text, Switch } from 'react-native';
import { SearchIcon } from '../../icons/Search.icon';
import { TextInput } from 'react-native';
import { MicIcon } from '../../icons/Mic.icon';

export default function SearchInput() {
  const [vegMode, setVegMode] = useState(false);

  return (
    <Flexbox style={styles.container} row alignItemsCenter justifyContentCenter>
      <Flexbox row style={styles.inputContainer} alignItemsCenter>
        <SearchIcon />

        <TextInput style={styles.input} placeholder="Search Pizza" />
        <View style={styles.separator} />

        <MicIcon />
      </Flexbox>

      <Flexbox justifyContentCenter alignItemsCenter>
        <Text style={styles.filterText}>VEG</Text>
        <Text style={styles.filterText}>mode</Text>
        <Switch
          style={styles.switch}
          value={vegMode}
          onValueChange={setVegMode}
        />
      </Flexbox>
    </Flexbox>
  );
}
