import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

Header.defaultProps = {
  title: 'Task Listss',
};
export default Header;
