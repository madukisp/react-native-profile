import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    backgroundColor: '#FFF',
    borderRadius: 5,
    elevation: 2,
    width: 130, // largura dos botões
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, // Posição da sombra
    shadowOpacity: 0.25,
    shadowRadius: 3.84, // Raio da sombra
    elevation: 5, // Elevação para Android (cria efeito de sombra)
    marginBottom: 10,
  },
  text: {
    marginLeft: 10, // espaçamento entre o ícone e o texto
    fontWeight: 'bold',
  },
  icon: {
    width: 25,
    height: 25,
  },
});


