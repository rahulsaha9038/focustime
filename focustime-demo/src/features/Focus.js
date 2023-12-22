import React, { useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { TextInput} from 'react-native-paper';
import { colors } from '../utils/color'
import { RoundedButton } from '../components/RoundedButton'
import { spacing} from '../utils/sizes'

export const Focus = ({addSubject}) => {

  const [subject, setSubject] = useState(null)
  
  return ( 
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        label="What would you like to focus on ?"
        onChangeText={setSubject} 
        style={styles.textInput}/>

        <View style={styles.button}>
          <RoundedButton 
          title="+" 
          size={50} onPress={() => addSubject(subject)}/>
        </View>
      </View>
    </View>
  )}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: colors.darkBlue
  }, 
  button : {
    justifyContent: 'center'
  },
  textInput : {
    flex: 0.8,
    marginRight: 10,
  },
  inputContainer : {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  }
})