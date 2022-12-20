import React from 'react';
import { View, Dimensions } from 'react-native';
import { GlobalStyles } from '../../helpers';

const { height, width } = Dimensions.get('window');

function Header(props) {
  return (
    <View style={[GlobalStyles.tabBarView, props.customStyles]}>
      {props.children}
    </View>
  );
}

export default SparqHeader = React.memo(Header);