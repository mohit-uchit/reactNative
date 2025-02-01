import React from 'react';
import {Image, StyleSheet, Text, View, Platform} from 'react-native';

export default function FancyCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Fancy Cards</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://fastly.picsum.photos/id/631/200/200.jpg?hmac=0M-2IX2ufxXIHxmjexNzQaHh00x_8G1oAr_FUKt4EgM',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Elegant Card</Text>
          <Text style={styles.cardLabel}>New Release</Text>
          <Text style={styles.cardDescription}>
            Experience the latest in design with this beautifully crafted card.
            A perfect combination of style and functionality.
          </Text>
          <Text style={styles.cardFooter}>12 mins ago</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderColor: 'green',
    borderWidth: 2,
    overflow: 'hidden',
    marginVertical: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  cardImage: {
    height: 220,
    width: '100%',
  },
  cardBody: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e272e',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 14,
    color: '#636e72',
    fontWeight: '500',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#4b4b4b',
    lineHeight: 22,
    marginBottom: 12,
  },
  cardFooter: {
    fontSize: 13,
    color: '#95a5a6',
    textAlign: 'right',
    fontStyle: 'italic',
  },
});
