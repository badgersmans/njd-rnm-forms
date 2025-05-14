import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import React, { PropsWithChildren } from 'react'

export default function KeyboardAwareScrollView({children}: PropsWithChildren) {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{backgroundColor: 'white', flex: 1}}
      keyboardVerticalOffset={110}
    >
      <ScrollView 
        style={{backgroundColor: 'white'}} 
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: 'white',
          padding: 10,
          gap: 5
        }}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView edges={['bottom']} style={{flex: 1}}>{children}</SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}