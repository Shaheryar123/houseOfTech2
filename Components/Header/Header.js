import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './HeaderStyles';

const Header = ({headerName}) => {
  return (
    <View style={styles.header}>
      <View>
        <Icon name="chevron-back-outline" size={30} color="#fff" />
      </View>
      <View>
        <Text style={styles.headText}>{headerName}</Text>
      </View>
      <View style={styles.iconsCont}>
        <Icon
          style={styles.startIcons}
          name="chatbox-ellipses-outline"
          size={30}
          color="#fff"
        />
        <Icon
          style={styles.startIcons}
          name="share-outline"
          size={30}
          color="#fff"
        />
        <Icon
          style={styles.lastIcons}
          name="heart-outline"
          size={30}
          color="#fff"
        />
      </View>
    </View>
  );
};

export default Header;
