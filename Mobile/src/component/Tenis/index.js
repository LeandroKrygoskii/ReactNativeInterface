import React from 'react';
import { TouchableOpacity , Image , StyleSheet, Text, View } from 'react-native';




export default function Tenis(props) {



 return (

    <TouchableOpacity style={styles.container} onPress={props.onClick}>
                             
            <Image
            source ={props.img}
            style={styles.imagemDoTenis}
            /> 
            <Text>
                {props.children}
            </Text> 

            <View opacity={0.4}>
                <Text style={styles.textoDoTenis}>
                    {props.custo}
                </Text>
           </View>               
                    
    </TouchableOpacity>


  );


}

const styles = StyleSheet.create({

    container:{
        alignItems:'center',
        justifyContent: 'center'
    },
    imagemDoTenis:{
        width:175,
        height:175
    },
    textoDoTenis:{
      fontSize:15
    }

})