import React from 'react';
import { Text, View, TouchableOpacity, Button, Image, SafeAreaView } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import FileSystem from 'expo-file-system';

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    previewUri: undefined
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      console.log('photo taken')
      this.setState({previewUri:photo.uri })
    }
  }

  
  render() {
    
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      if(this.state.previewUri != undefined) {

        return(
        <SafeAreaView style ={{flex:1}}>
          <Image source={{uri: this.state.previewUri}} />
        </SafeAreaView>
        )
      } else {
      return (
        <View style={{ flex: 1, paddingBottom: 50 }}>
          <Button title="Take Photo" onPress={this.snap}></Button>
          <Camera style={{ flex: 1 }} type={this.state.type} ref = {ref => {this.camera = ref}}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
  }
}