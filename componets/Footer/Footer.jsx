import {  View, Text } from "react-native";
import { styleFooter } from "../../assets/styles/styes.jsx";

export default function Footer(props){
    return(
        <View style={styleFooter.container}>
            <Text>{props.message}</Text>
        </View>
    );
}