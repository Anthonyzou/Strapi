

import React, {
  Component,
  DrawerLayoutAndroid,
  Image,
  ListView,
  PullToRefreshViewAndroid,
  ScrollView,
  Text,
  TextInput,
  ToolbarAndroid,
  TouchableHighlight,
  TouchableOpacity,
  View,
  RecyclerViewBackedScrollView,
} from 'react-native';

import styles  from './styles';
import strats from './strategies';

export default class Index extends Component{
  constructor (props, context) {
    super(props, context);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      sites: ds.cloneWithRows(strats),
      input: "",
      colors: [16711680],
    };
    this.navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <TouchableHighlight
          underlayColor={"#f0f0f0"}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#f0f0f0"}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#f0f0f0"}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#f0f0f0"}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#f0f0f0"}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </TouchableHighlight>
      </View>
    )
  }
  handleChange (change) {
    // return console.log(change);
    this.setState({
      isRefreshing: false,
      input: change
    });
  }
  onActionSelected(position) {

    this.refs['DRAWER'].openDrawer();
  }
  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Right}
        ref={'DRAWER'}
        renderNavigationView={() => this.navigationView}>
        <ToolbarAndroid
          style={styles.components.toolBar}
          title="Strapi"
          actions={[{title: 'Drawer!', show: 'always'}]}
          onActionSelected={this.onActionSelected.bind(this)}>
            <TextInput
              multiline={false}
              style={{flex: 1,}}
              value={this.state.input}
              onChangeText={this.handleChange.bind(this)}></TextInput>
        </ToolbarAndroid>
          <PullToRefreshViewAndroid
            style={styles.components.body}
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor={'#ffff00'}
            >

                <ListView
                  dataSource={this.state.sites}
                  renderScrollComponent={props => <RecyclerViewBackedScrollView {...props}></RecyclerViewBackedScrollView>}
                  renderRow={(site, i, idx) => <Sites key={idx} site={idx}></Sites>}
                />

          </PullToRefreshViewAndroid>
      </DrawerLayoutAndroid>
    );
  }
  _onRefresh(){
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      });
    }, 1000);
  }
}

class Sites extends Component{
  constructor (props, context) {
    super(props, context);
    this.state = {
      site: strats[this.props.site],
    };
  }
  componentDidMount (){
    strats[this.props.site].run( (err, images) => {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        loaded: true,
        ds : ds.cloneWithRows(images)
      })
    })
  }
  render(){
    return (
      <View key={this.props.site} style={{flex: 1}}>
        <View style={styles.components.siteContainer}>
          <Image source={{uri: "http://placehold.it/16x16"}} style={styles.components.favicon}/>
          <Text style={styles.components.title}>{this.state.site.name}</Text>
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
  renderImage (image, reactID, idx){
    var handle = (e) => {
      console.log(e, image);
    }
    return (
      <TouchableHighlight
        underlayColor={"#f0f0f0"}
        key={image.id}
        onPress={handle}>
        <Image
          source={{uri: image.preview_url}}
          style={styles.components.thumbnail}
        />
      </TouchableHighlight>
    )
  }
}
