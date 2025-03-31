import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  titleContainer: {
    marginBottom: 20,
  },
  inputTitle: {
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
    fontSize: 22,
    color: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  contentContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  inputContent: {
    fontSize: 18,
    color: '#FFF',
    textAlignVertical: 'top',
  },
});