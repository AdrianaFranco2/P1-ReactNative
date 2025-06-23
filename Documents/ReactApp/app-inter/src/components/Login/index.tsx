import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import { styles } from './styles';

export default function Login() {
  return (
    <View style={styles.conteudoCentral}>
      <StatusBar backgroundColor="#FF6600" barStyle="light-content" />
      <Image style={styles.logoInter} source={require('../assets/logointer.png')} />
      {/* botão do saldo */}
      <TouchableOpacity style={styles.containerSaldo}>
        <Text style={styles.valorSaldo}>R$ 0,00</Text>
        <Text style={styles.setaSaldo}></Text>
      </TouchableOpacity>
      {/* botão do pix  */}
      <TouchableOpacity style={styles.botaoPrincipal}>
          <Text style={styles.iconeBotao}>🎯</Text>
          <Text style={styles.textoBotaoPrincipal}>Pix</Text>
      </TouchableOpacity>
      {/* botao do pagar */}
      <TouchableOpacity style={styles.botaoPrincipal}>
          <Text style={styles.iconeBotao}>📊</Text>
          <Text style={styles.textoBotaoPrincipal}>Pagar</Text>
      </TouchableOpacity>
      {/* botão cartões */}
        <TouchableOpacity style={styles.botaoPrincipal}>
          <Text style={styles.iconeBotao}>💳</Text>
          <Text style={styles.textoBotaoPrincipal}>Cartões</Text>
        </TouchableOpacity>
        {/* botão fgts */}
        <View style={styles.linhaMenu}>
        <TouchableOpacity style={styles.itemMenu}>
          <Text style={styles.iconeMenu}>🕐</Text>
          <Text style={styles.textoMenu}>Antecipar</Text>
          <Text style={styles.textoMenuPequeno}>FGTS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemMenu}>
          <Text style={styles.iconeMenu}>📈</Text>
          <Text style={styles.textoMenu}>Invest</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemMenu}>
          <Text style={styles.iconeMenu}>🐷</Text>
          <Text style={styles.textoMenu}>Meu</Text>
          <Text style={styles.textoMenuPequeno}>Porquinho</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemMenu}>
          <Text style={styles.iconeMenu}>📱</Text>
          <Text style={styles.textoMenu}>Recargas</Text>
        </TouchableOpacity>

        
        </View>
      
   </View> 
     
  );
}