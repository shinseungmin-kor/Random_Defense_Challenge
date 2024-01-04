import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import React from 'react';
import { SafeContainer } from '../../../components/container/SafeContainer';
import { Color } from '../../../statics/styles/Color';
import AllCharacterContainer from '../../../components/container/AllCharacterContainer';
import { CharacterDummy } from '../../../dummy/CharacterDummy';

const AllCharacter = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <SafeContainer style={styles.container}>
      <FlatList
        data={CharacterDummy}
        renderItem={({ item }) => (
          <AllCharacterContainer
            key={item.key}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        )}
        keyExtractor={(item, index) => item.title}
        numColumns={4}
        columnWrapperStyle={{ gap: 14 }}
        contentContainerStyle={{ gap: 10 }}
      />
    </SafeContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginTop: 20,
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: Color.White,
  },
});

export default AllCharacter;
