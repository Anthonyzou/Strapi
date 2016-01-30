

import React, {
  AppRegistry,
  Button,
  Image,
  Component,
  ListView,
  ScrollView,
  Text,
  TextInput,
  ToolbarAndroid,
  View,
  TouchableOpacity,
  TouchableHighlight,
  PullToRefreshViewAndroid,
  Navigator
} from 'react-native';

import styles  from './styles';
import strats from './strategies';

export default class Index extends Component{
  constructor (props, context) {
    super(props, context);
    this.state = {
      input: "42",
      colors: [16711680]
    };
  }
  handleChange (change) {
    // return console.log(change);
    this.setState({
      isRefreshing: false,
      input: change
    });
  }

  render() {
    return (
      <View style={styles.components.body}>
        <ToolbarAndroid
          style={styles.components.toolBar}
          title="Strapi"
          onActionSelected={this.onActionSelected} />
        <TextInput
          multiline={false}
          value={this.state.input}
          onChangeText={this.handleChange}></TextInput>
        <PullToRefreshViewAndroid
          style={styles.components.body}
          refreshing={this.state.isRefreshing}
          onRefresh={this._onRefresh}
          colors={['#ff0000', '#00ff00', '#0000ff']}
          progressBackgroundColor={'#ffff00'}
          >
          <ScrollView  style={styles.components.body}>
            {
              strats.map((i, idx)=>{
                return (
                  <Sites key={idx} site={idx}></Sites>
                )
              })
            }
          </ScrollView>
        </PullToRefreshViewAndroid>
      </View>
    );
  }
  _onRefresh(){
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      });
    }, 5000);
  }
}

class Sites extends Component{
  constructor (props, context) {
    super(props, context);
    this.state = {
      images: [],
      site: strats[this.props.site]
    };
  }
  componentDidMount (){
    strats[this.props.site].run( (err, images) => {
      this.setState({
        images : images,
      })
    })
  }
  render(){
    return (
      <View key={this.props.site}>
        <View style={styles.components.siteContainer}>
          <Image source={{uri: "http://placehold.it/16x16"}} style={styles.components.favicon}/>
          <Text style={styles.components.title}>{this.state.site.name}</Text>
          <Text style={styles.components.title}>Favorites</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.components.horizontalScrollContainer}>
          {
            this.state.images.map(this.renderImage)
          }
        </ScrollView>
      </View>
    )
  }
  renderImage (image){
    var handle = (e) => {
      console.log(e, image);
    }
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
