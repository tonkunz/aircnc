import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  AsyncStorage,
  Image,
  Platform,
  StyleSheet
} from "react-native"

import SpotList from '../components/SpotList'

import logo from '../assets/logo.png'

export default function List({ navigation }) {
  const [techs, setTechs] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      if (storagedTechs) {
        const techsArray = storagedTechs.split(',').map(tech => tech.trim())

        setTechs(techsArray)
      }
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <ScrollView>
        {techs.map(tech => <SpotList key={tech} tech={tech} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: 'center',
    marginTop: Platform.OS === 'android' ? 35 : 10
  }
})