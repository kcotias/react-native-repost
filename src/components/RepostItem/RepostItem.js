import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import themeStyles from '@config/theme.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const RepostItem = ({ author, description, thumbnail, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.thumb} source={thumbnail} resizeMode="contain" />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{author}</Text>
          <Text style={styles.text} ellipsizeMode="tail" numberOfLines={3}>
            {description}
          </Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity>
            <Icon name="chevron-right" size={15} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RepostItem;
