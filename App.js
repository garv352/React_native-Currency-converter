import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,TextInput , TouchableOpacity, Alert , Keyboard , TouchableWithoutFeedback} from 'react-native';

const CurrencyPerRupee ={
  DOLLAR:0.013,
  EURO:0.012,
  POUND:0.011,
  YEN:1.43 ,
  DINAR:0.0041,
  BITCOIN:0.0000015,
}


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      inputValue:"",
      resultValue:"0.0"
    };
  }
  buttonPressed = (currency)  =>{
    if(this.state.inputValue === ""){
      Alert.alert("Enter some value");
    }
    let result = parseFloat(this.state.inputValue) * CurrencyPerRupee
    [currency]

    this.setState({resultValue:result.toFixed(2)})

  

  };
  render(){
    return (
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View  style={styles.ScreenView}>
         <View style ={styles.resultContainer}>
          <Text style={styles.resultValue}>{this.state.resultValue}</Text>
         </View>
         <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              selectionColor="#FFF"
              keyboardType = "numeric"
              placeholder ="Enter value"
              value={this.state.inputValue}
              onChangeText={inputValue => this.setState({
                inputValue
              })}
            />
         </View>
         <View style={styles.converterbuttoncontainer}>
           <TouchableOpacity
           onPress={() => this.buttonPressed("DOLLAR")}
             style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>$(Dollar)</Text>
           </TouchableOpacity>
           <TouchableOpacity
           onPress={() => this.buttonPressed("EURO")}
             style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>€</Text>
           </TouchableOpacity>
           <TouchableOpacity
           onPress={() => this.buttonPressed("YEN")}
             style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>¥</Text>
           </TouchableOpacity>
           <TouchableOpacity
           onPress={() => this.buttonPressed("POUND")}
             style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>£</Text>
           </TouchableOpacity>
           <TouchableOpacity
           onPress={() => this.buttonPressed("DINAR")}
             style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>د.ك</Text>
           </TouchableOpacity>
           <TouchableOpacity
           onPress={() => this.buttonPressed("BITCOIN")}
             style={styles.converterbutton}>
             <Text style={styles.converterbuttontext}>฿</Text>
           </TouchableOpacity>
         </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  ScreenView:{
    flex:1,
  },
  resultValue:{
    fontSize:30,
    fontWeight:"bold",
    color:"#ffffff"
  },
  resultContainer:{
    height:70,
    marginTop:30,
    justifyContent:"center",
    borderColor:"#535c68",
    backgroundColor:"#0a79de",
    alignItems:"center"
  },
  inputContainer:{
    height:70,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#c1c1c1",
    backgroundColor:"#0a79de",
    
  },
  input:{
    color:"#fff",
    fontSize:25,
  },
  converterbuttoncontainer:{
    flexDirection :"row",
    flexWrap:"wrap",
    marginTop: 20,
    borderColor:"#c1c1c1",
    borderWidth:2,

  },
  converterbutton:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#0a79df",
    height:100,
    borderColor:"#c1c1c1",
    borderWidth:2,
    width:"33.3%"
  },
  converterbuttontext:{
    color:"#fff",
    fontSize:20,
    fontWeight:"bold"
  }
});
