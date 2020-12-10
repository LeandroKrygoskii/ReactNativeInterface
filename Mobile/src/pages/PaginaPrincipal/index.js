import React from 'react';
import { View , StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import Tenis from '../../component/Tenis';

export default function PaginaPrincipal(){
 

    const navigation = useNavigation();
    return(
            
        <View style={styles.container}>

            <View style={styles.header}>
                <Image 
                source={require('../../images/banner.png')}
                style={styles.banerLogo}
                />
                  
                  <View style={styles.textContainer}>
                      <Text style={styles.Texto}>TENIS</Text>
                      <Text style={[styles.Texto, {color:'#CECECF'}]}>●</Text>
                      <Text style={[styles.Texto,{color:'#CECECF'}]}>MASCULINO</Text>
                     <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                       <MaterialIcons
                          name="gif"
                          size={24}
                          color="red"
                        />
                     </TouchableOpacity>                     
                  </View>
            </View>

            <View style={styles.linha}></View>



            <ScrollView>

                  <Text style={styles.Texto}>Lançamentos</Text>      
                 
                       <View style={{flexDirection:'row' , justifyContent:'space-around'}}>
                           <Tenis img={require('../../images/1.jpg')} custo="R$100,99" onClick={()=>navigation.navigate('PaginaDetalhes')}>
                             Nike1
                           </Tenis>
                           <Tenis img={require('../../images/2.jpg')} custo="R$200,99" onClick={()=>navigation.navigate('PaginaDetalhes')}>
                              Nike2
                           </Tenis>
                       </View>

                       <View style={{flexDirection:'row' , justifyContent:'space-around'}}>
                           <Tenis img={require('../../images/3.png')} custo="R$300,99" onClick={()=>navigation.navigate('PaginaDetalhes')}>
                               Nike Air 
                           </Tenis>
                           
                           <Tenis img={require('../../images/4.png')} custo="R$500,99" onClick={()=>navigation.navigate('PaginaDetalhes')}>
                               Nike Air Jordan
                           </Tenis>
                           
                       </View>

                       <View style={{flexDirection:'row' , justifyContent:'space-around'}}>
                           <Tenis img={require('../../images/5.png')} custo="R$100,99" onClick={()=>navigation.navigate('PaginaDetalhes')}>
                               Adidas Falsificado
                           </Tenis>
                           <Tenis img={require('../../images/6.png')} custo="R$200,99" onClick={()=>navigation.navigate('PaginaDetalhes')}>
                             Feito por Chineses
                           </Tenis>
                       </View>

                    
            </ScrollView>

            
                
            
        </View>
    );


}

const styles = StyleSheet.create({

    container:{
        flex:1,
        width:'100%',
        backgroundColor:'#FFF'       
    },
    banerLogo:{
        width:'100%'
    },
    header:{
        marginBottom:8
    },
    textContainer:{
           flexDirection:'row',
           marginVertical:'2%',
           marginHorizontal:'2%',
    },
    Texto:{
        fontSize:26,
        marginHorizontal: '1%',    
    },
    linha:{
        borderBottomColor:'#000',
        borderBottomWidth:2
    },

})