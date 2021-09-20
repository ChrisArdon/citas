import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';
import colors from "../src/utils/colors";

const Formulario = ({citas, setCitas, guardarMostrarForm, guardarCitasStorage}) => {
    //Variables para el formulario
    const [paciente, guardarPaciente] = useState('');
}

export default Formulario;