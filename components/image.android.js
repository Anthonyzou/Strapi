
import React, {
  Image,
  Component,
  ListView,
  ScrollView,
  Text,
  TextInput,
  ToolbarAndroid,
  View,
  TouchableOpacity,
} from 'react-native';


export default class singleImage extends Component{
  render(){
    return (
      <TouchableHighlight key={image.id} onPress={handle}>
        <Image
          source={{uri: image.preview_url}}
          style={styles.components.thumbnail}
          />
      </TouchableHighlight>
    )
  }
}
