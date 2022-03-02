import React from 'react';
import {Text, TouchableOpacity, TouchableHighlight, View, StyleSheet} from 'react-native';



const SocialButton = ({
    buttonTitle,
    btnType,
    color,
    backgroundColor,
    ...rest
  }) => {
    let bgColor = backgroundColor;
    return (
      
      <TouchableOpacity style={[styles.buttonContainer,{backgroundColor: bgColor}]}  {...rest}>
      <View style={styles.btnTxtWrapper}>
         <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
       </View>
    </TouchableOpacity>
    
    );
  };
  const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height:  128,
      padding: 10,
      flexDirection: 'row',
      borderRadius: 3,
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
      },
    });
    export default SocialButton;