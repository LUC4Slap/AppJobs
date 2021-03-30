import React from 'react';
import { SafeAreaView, Text } from 'react-native';

// import { Container } from './styles';

const Jobs = (vaga) => {
  console.log(vaga);
  return (
    <SafeAreaView>
      <Text>{vaga.title}</Text>
    </SafeAreaView>
  );
}

export default Jobs;