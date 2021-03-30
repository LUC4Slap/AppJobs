import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from  'axios'
import Jobs from '../../components/Jobs'
// https://jobs.github.com/positions.json?description=javascript&full_time=true

const Home = () => {
  const [jobs, setJobs] = useState(null)

  useEffect(() => {
    async function getJobs() {
      let { data } = await axios.get('https://jobs.github.com/positions.json?search=node')
      setJobs(data)
    }
    getJobs()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs} 
        renderItem={ () => <Jobs vaga={jobs} /> } 
        keyExtractor={item => item.id} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Home;