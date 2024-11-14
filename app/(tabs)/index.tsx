import {
  Text,
  View,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity 
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.container}>
        <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png",
              width: 100,
              height: 100,
            }}
          />
          <Text style={styles.text}>Google</Text>
          
          <TextInput style={styles.inputtext1} placeholder="email atau no hp" />

          <TextInput style={styles.inputtext2} placeholder="password" />
          <TouchableOpacity style={styles.button1}onPress={()=>alert('LOGIN')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}onPress={()=>alert('Lupa kata sandi')}>
            <Text>Lupa Kata Sandi</Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
},
button1:{
  width: 100,
  height: 50,
  borderRadius:10,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"aqua",
  fontSize:10,
  right:100,
  top:10,
  
},
button2:{
  
  width: 100,
  height: 50,
  borderRadius:10,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"aqua",
  fontSize:10,
  left:100,
  top:-40,
},
text:{
  fontFamily:"Arial",
  fontSize:50,
  color:"black",
},
inputtext1:{
 color: "black",
 borderRadius:5,
 borderWidth:1,
 fontSize:20,
 width:300,
},
inputtext2:{
  color: "black",
  borderRadius:5,
  borderWidth:1,
  fontSize:20,
  width:300,
  height:30,
  marginTop:10
 }
})