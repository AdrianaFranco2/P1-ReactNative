import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';



export default function App() {
  return (
    <View style={styles.conteudoCentral}>
      <StatusBar style="light" />
      
      {/* Logo*/} 
      <Image style={styles.logoInter} source={require('../assets/logointer.png')} />
      
      <View style={styles.containerCamposInputs}>
        {/*Campos de input*/}
        <TextInput 
          style={styles.textInputCPF} 
          placeholderTextColor={"#ccc"} 
          placeholder="Adriana Marins"
          
        />
        {/* texto de entrada com o cpf do correntista */}
        <TextInput 
          style={styles.textInputCPF} 
          placeholderTextColor={"#ccc"} 
          placeholder="***.000.000-**"
          
        />
        {/* // texto para inclusão da senha */}
        <TextInput 
          style={styles.textInputCPF} 
          placeholderTextColor={"#ccc"} 
          placeholder="Senha" 
          secureTextEntry
        />
        
        {/* // botão para entrar no sistema */}
        <TouchableOpacity style={styles.botaoLogar}>
          <Text style={styles.botaoLogarTexto}>Entrar</Text>
        </TouchableOpacity>
        
        {/* //botão de esquecimento de senha */}
        <TouchableOpacity>
          <Text style={styles.linkEsqueceuSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        
        {/* // botão de opção de reconhecimento facial */}
        <TouchableOpacity style={styles.botaoDoFooter}>
          <Text style={{ fontSize: 8, color: "#d78435" }}>📷</Text>
          <Text style={styles.textoBotaoCentral}>Entre usando sua identificação facial</Text>
        </TouchableOpacity>
      </View>
      {/* // texto do footer */}
      <View style={styles.containerDoFooter}>
        <Text style={styles.textoFooter}>iSafe</Text>
        <Text style={styles.textoFooter}>Trocar ou abrir conta</Text>
      </View>
    </View>
  );
}