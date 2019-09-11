import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import themeStyles from '../../config/theme.styles';

const RepostItem = ({ author, description, thumbnail }) => {
  return (
    <TouchableWithoutFeedback onPress={() => alert('Clicou')}>
      <View style={{ flexDirection: 'row', margin: 10, marginVertical: 5 }}>
        <Image
          style={{ height: 80, width: 80, flex: 1, borderRadius: 8 }}
          source={thumbnail}
          resizeMode="contain"
        />
        <View
          style={{
            flex: 2,
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
            numberOfLines={2}>
            {description}
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RepostItem;
