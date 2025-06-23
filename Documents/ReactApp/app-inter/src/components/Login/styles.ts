import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Container geral
  conteudoCentral: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2a2930",
    justifyContent: "space-between",
    
  },
  
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
 logoInter: {
    marginTop: 70,
    width: 225,
    height: 100,
    resizeMode: 'contain', 
  },
  headerIcones: {
    flexDirection: 'row',
  },
  iconeHeader: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#404040',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  textoIcone: {
    fontSize: 16,
  },

    // Saldo
  containerSaldo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  valorSaldo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  setaSaldo: {
    fontSize: 24,
    color: '#FFFFFF',
  },

  // Botões principais
  containerBotoesPrincipais: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 15,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  botaoPrincipal: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    //paddingHorizontal: 25,
    backgroundColor: '#404040',
    borderRadius: 12,
    width: 100,
    marginHorizontal: 5,
    marginVertical: 5,

  },
  iconeBotao: {
    flexDirection: 'row',
    fontSize: 20,
    marginBottom: 5,
  },
  textoBotaoPrincipal: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },

  // Menu
  containerMenu: {
    paddingHorizontal: 20,
    marginBottom: 30,
    flexDirection: 'row',
  },
  linhaMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  itemMenu: {
    alignItems: 'center',
    width: 80,
    
  },
  iconeMenu: {
    fontSize: 24,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textoMenu: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  textoMenuPequeno: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  // Post
  // containerPost: {
  //   backgroundColor: '#404040',
  //   borderRadius: 12,
  //   padding: 15,
  //   marginHorizontal: 20,
  //   marginBottom: 20,
  // },
  // headerPost: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginBottom: 10,
  // },
  // avatarPost: {
  //   fontSize: 24,
  //   marginRight: 10,
  // },
  // infoUsuario: {
  //   flex: 1,
  // },
  // nomeUsuario: {
  //   color: '#FFFFFF',
  //   fontSize: 14,
  //   fontWeight: '600',
  // },
  // usernamePost: {
  //   color: '#AAAAAA',
  //   fontSize: 12,
  // },
  // tempoPost: {
  //   color: '#AAAAAA',
  //   fontSize: 12,
  // },
  // conteudoPost: {
  //   color: '#FFFFFF',
  //   fontSize: 14,
  //   lineHeight: 18,
  //   marginBottom: 10,
  // },
  // acoes: {
  //   flexDirection: 'row',
  // },
  // curtidas: {
  //   color: '#AAAAAA',
  //   fontSize: 12,
  //   marginRight: 15,
  // },
  // comentarios: {
  //   color: '#AAAAAA',
  //   fontSize: 12,
  // },

  // // Banner FGTS
  // bannerFGTS: {
  //   backgroundColor: '#FFE4B5',
  //   borderRadius: 12,
  //   padding: 20,
  //   marginHorizontal: 20,
  //   marginBottom: 20,
  // },
  // tituloFGTS: {
  //   color: '#FF6B35',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   marginBottom: 15,
  // },
  // containerValorFGTS: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   backgroundColor: '#87CEEB',
  //   padding: 15,
  //   borderRadius: 8,
  // },
  // valorFGTS: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: '#2C2C2C',
  // },
  // iconeFGTS: {
  //   fontSize: 20,
  // },
});