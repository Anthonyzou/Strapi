'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  ListView,
  ToolbarAndroid,
  RecyclerViewBackedScrollView,
} from 'react-native';

import styles  from './styles';

export default class ExamplePage extends Component {
  constructor(props, context) {
    super(props, context);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      tags : ds.cloneWithRows([1,2,3,4,5,6,7,8,9,10])
    };
  }
  render() {
    return (
      <View >
        <ToolbarAndroid
          style={styles.components.toolBar}
          title="Strapi"
          actions={[{title: 'Drawer!', show: 'always'}]}>

        </ToolbarAndroid>
        <View style={{flex:1, alignItems:'center'}}>
          <Image source={{uri: 'http://placehold.it/300'}} style={{width: 300, height: 300}}></Image>
          <View>
            <ListView
              dataSource={this.state.tags}
              style={{flex:1,flexDirection: 'column'}}
              renderScrollComponent={props => <RecyclerViewBackedScrollView {...props}></RecyclerViewBackedScrollView>}
              renderRow={(tag, i, idx) => <Text key={idx}>{tag}</Text>}
            />
          </View>
        </View>
      </View>
    );
  }
}
