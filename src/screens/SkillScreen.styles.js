import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  skillsWrapper: {
    alignSelf: 'center',
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  skillText: {
    fontSize: 16,
    marginRight: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
});

export default styles;
