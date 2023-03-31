import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionList: {
    width: '100%',
  },
  itemDivider: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(66, 134, 244, 0.4)',
  },
  renderedItemContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: 'rgba(66, 134, 244, 0.1)',
  },
  renderedItemInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  renderedItemInfoText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  safeAreaStyle: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default styles;
