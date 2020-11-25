import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import PaginaPrincipal from './pages/PaginaPrincipal';
import PaginaDetalhes from './pages/PaginaDetalhes';


function Rotas(){

 
    const { Navigator, Screen } = createStackNavigator();

    return(

         <NavigationContainer>

               <Navigator>

                   <Screen
                   name="PaginaPrincipal"
                   component={PaginaPrincipal}
                   options={{headerShown:false}}
                   />

                    <Screen
                   name="PaginaDetalhes"
                   component={PaginaDetalhes}
                   />

               </Navigator>

         </NavigationContainer>
           
    );


}

export default Rotas;