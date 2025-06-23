import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Container geral
  conteudoCentral: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2a2930",
    justifyContent: "space-between",
    
  },

  // Container dos campos de input
  containerCamposInputs: {
    marginBottom: 150,
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 30,
  },

  // Container do footer
  containerDoFooter: {
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },

  // Texto do footer
  textoFooter: {
    color: "orange",
    fontSize: 14,
  },

  // Logo
  logoInter: {
    marginTop: 70,
    width: 225,
    height: 100,
    resizeMode: 'contain', 
  },

  // Campos de input
  textInputCPF: {
    width: "90%",
    height: 60, 
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    borderRadius: 10,
    fontSize: 18,
    color: "#d78435",
    paddingHorizontal: 15, 
    backgroundColor: "#3a3a42", 
    justifyContent: "center",
    alignItems: "center",
   
  },

  // Botão principal
  botaoLogar: {
    width: "90%",
    height: 60,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#d78435", 
    borderRadius: 10,
    backgroundColor: "#d78435", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  // Texto do botão principal
  botaoLogarTexto: {
    color: "#fff", 
    fontSize: 20,
    fontWeight: "bold"
  },

  // Link "Esqueceu senha"
  linkEsqueceuSenha: {
    color: "#d78435",
    fontSize: 16,
    textDecorationLine: 'underline'
  },

  // Botão do reconhecimento facial
  botaoDoFooter: {
    width: 200, 
    height: 65,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#d78435",
    backgroundColor: "transparent"
  },

  // Texto do botão facial
  textoBotaoCentral: {
    color: "#d78435",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    marginTop: 5
  }
});