import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: 1,
      name: 'Mohit Uchit',
      role: 'Software Engineer',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D5603AQG7nnKclm197g/profile-displayphoto-shrink_200_200/B56ZPuglOZG4AY-/0/1734873339499?e=1743638400&v=beta&t=Oj9eFAYuEZyEPJH3epW8zf2oW6kGdKtfANFkPjdYc5Y',
    },
    {
      id: 2,
      name: 'Ankur Shukla',
      role: 'Senior Software Engineer',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/C4E03AQF7YsjeeYLnTQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1636970186465?e=1743638400&v=beta&t=56klRRVFaTlaevTR3DEKyFwZPUHISfB124Io1Y1L65o',
    },
    {
      id: 3,
      name: 'Hitesh Kumar',
      role: 'Backend Team Lead',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D4D03AQFwgcQ-yZzI6g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688370255650?e=1743638400&v=beta&t=1Wp6GX1bAdMimO0B8fft0k0G8HMl1BsXv7FnjqxZrU8',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView>
        {contacts.map(({ id, name, role, imageUrl }) => (
          <View key={id} style={styles.contactCard}>
            <Image source={{ uri: imageUrl }} style={styles.contactImage} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{name}</Text>
              <Text style={styles.contactRole}>{role}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactRole: {
    fontSize: 14,
    color: 'gray',
  },
});
