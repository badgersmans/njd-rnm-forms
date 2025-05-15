import { TextInput, StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ComponentProps } from 'react'
import { useController } from 'react-hook-form'

type CustomTextInput = {
  label?: string,
  containerStyle?: StyleProp<ViewStyle>,
  name: string
} & ComponentProps<typeof TextInput>

export default function CustomTextInput({
  label,
  containerStyle,
  name,
  ...textInputProps}: CustomTextInput) {
  
  const {
    field: {value, onChange, onBlur},
    fieldState: { error },
  } = useController({name, rules: {required: `${name} is required`} })

  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...textInputProps}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        style={[
          styles.input, 
          textInputProps.style,
          error ? styles.errorInput : {}, 
        ]}
      />
      <Text style={styles.error} numberOfLines={1}>
        {error?.message}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    borderRadius: 5,

    marginTop: 5,
    marginBottom: 2,
  },
  label: {
    fontWeight: 600,
    color: 'dimgray'
  },
  error: {
    color: 'crimson',
    height: 17
  },
  errorInput: {
    borderColor: 'crimson'
  }
})