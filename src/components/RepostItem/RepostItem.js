import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import themeStyles from '../../config/theme.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const RepostItem = ({ author, description, thumbnail }) => {
  return (
    <TouchableWithoutFeedback onPress={() => alert('Clicou')}>
      <View style={{ flexDirection: 'row', margin: 10, marginVertical: 5 }}>
        <Image
          style={{ height: 75, width: 75 }}
          source={thumbnail}
          resizeMode="contain"
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
          <Text style={{ fontWeight: themeStyles.FONT_WEIGHT_MEDIUM }}>
            {author}
          </Text>
          <Text
            style={{
              fontWeight: themeStyles.FONT_WEIGHT_LIGHT,
              fontSize: themeStyles.FONT_SIZE_SMALL,
              color: 'gray',
            }}
            ellipsizeMode="tail"
            numberOfLines={3}>
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
