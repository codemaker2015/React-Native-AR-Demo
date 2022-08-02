import React from 'react';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import HelloWorldSceneAR from './src/components/HelloWorldSceneAR';

export default App = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={{flex: 1}}
    />
  );
};
