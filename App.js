import React, { useState, useEffect} from "react";
import {Text, StyleSheet, View, FlatList, 
TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform} from 'react-native';
import Cita from "./componentes/Cita";
import Formulario from "./componentes/Formulario";
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from "./src/utils/colors";

const App = () => {
    //definir el state de citas
    const [citas, setCitas] = useState([]);
    const [mostrarform, guardarMostrarForm] = useState(false);
    
    useEffect(() => {
        const obtenerCitasStorage = async () => {
            try{
                const citasStorage = await AsyncStorage.getItem('citas');
                if(citasStorage){
                    setCitas(JSON.parse(citasStorage))
                }
            }catch(error){
                console.log(error);
            }
        }
        obtenerCitasStorage();
    }, []);
}