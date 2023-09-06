import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const styleFooter = StyleSheet.create({
    container: {
        position:'absolute',
        bottom:'0'
    },
  });

  export { styles, styleFooter }