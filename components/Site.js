
import React, {
  Component,
  DrawerLayoutAndroid,
  ListView,
  PullToRefreshViewAndroid,
  ScrollView,
  Text,
  Image,
  TextInput,
  ToolbarAndroid,
  TouchableHighlight,
  TouchableOpacity,
  View,
  RecyclerViewBackedScrollView,
} from 'react-native';

import styles  from './styles';
import {Actions} from 'react-native-router-flux'
import ImageCache from 'react-native-image-cache'
export default class Site extends Component{
  constructor (props, context) {
    super(props, context);
    this.state = {
    };
    this.props.callback(this.load.bind(this))
  }

  componentDidMount = this.load.bind(this);

  load (cb){
    this.run( (err, images) => {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        loaded: true,
        ds : ds.cloneWithRows(images)
      })
      if(cb){
        cb()
      }
    })
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection:'row', flex: 1}}>
          <TouchableHighlight >
            <View style={{flexDirection:'row', flexDirection: 'row', alignItems : 'center'}}>
              <ImageCache src={this.favicon} style={styles.components.favicon}/>
              <Text style={styles.components.title}>{this.name}</Text>
            </View>
          </TouchableHighlight>
          <Text style={styles.components.title}>Favorites</Text>
        </View>
        { this.state.loaded &&
          <ListView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            dataSource={this.state.ds}
            renderRow={this.renderImage}
            style={styles.components.listView}
          />
        }
      </View>
    )
  }

  renderImage (image){
    return (
      <TouchableHighlight
        underlayColor={"#f0f0f0"}
        onPress={Actions.SingleImage.bind(null, {image:image})}>
        <ImageCache
          src={image.preview_url}
          style={styles.components.thumbnail}
        />
      </TouchableHighlight>
    )
  }
}
