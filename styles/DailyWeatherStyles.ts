import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  currentInfoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentInfoDateContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  currentInfoText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  listItemText: {
    color: 'white',
    fontWeight: 'bold',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  safeAreaView: {
    flex: 1,
  },
});

export default styles;
