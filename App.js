import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styleFooter } from './assets/styles/styes.jsx';
import { styles } from './assets/styles/styes.jsx';
import Footer from './componets/Footer/Footer.jsx';
import Form from './componets/Form/Form.jsx';
export default function App() {
  return (
    <View style={styles.container}>
      <Footer message='this is the footer' style={styleFooter.container}></Footer>
    </View>
  );
}


 