import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Label = ({title, fontfamily = 'Poppins-Medium', fontsize = 14}) => {
  return <Text style={styles.text(fontfamily, fontsize)}>{title}</Text>
}

export default Label

const styles = StyleSheet.create({
    text: (fontfamily, fontsize) => ({
        fontFamily: fontfamily,
        fontSize: fontsize,
        color: '#000000'
    }),
});