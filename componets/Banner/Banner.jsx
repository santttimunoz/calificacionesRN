import { Image } from "react-native-web";

export default function Banner(props){
    return(
      <Image
      style={{width:'100%', height:'30%', resizeMode:'stretch'}}
      source={require(`../../assets/images/${props.agregarimagen}`)}/>
    );
    }