import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

const RepostItem = ({ author, description, thumbnail }) => {
  return (
    <View style={{ flexDirection: 'row', margin: 10, marginVertical: 15 }}>
      <Image style={{ height: 90, flex: 1 }} source={thumbnail} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{author}</Text>
        <Text ellipsizeMode="tail" numberOfLines={2}>
          {description}
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RepostItem;
