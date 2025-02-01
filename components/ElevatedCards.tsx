import {ScrollView, StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>Card 2</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>Card 3</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>Card 4</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>Card 5</Text>
        </View>
        <View style={[styles.card, styles.elevatedCards]}>
          <Text>Card 6</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    margin: 4,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    margin: 8,
    height: 100,
    width: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  elevatedCards: {
    backgroundColor: 'skyblue',
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowColor: 'red',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
