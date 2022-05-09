import { View } from 'react-native';
import Welcome from './src/components/Welcome';
import { Typography } from './src/styles';

export default function App() {
  return (
    <View style={Typography.style.container}>
      <Welcome/>
    </View>
  );
}
