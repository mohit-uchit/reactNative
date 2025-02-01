import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  const openWebstie = (link: string) => {
    return Linking.openURL(link);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Action Cards</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>CYPHER RAT</Text>

        <Image
          source={{
            uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDry5na7VYvxht3GmMxFFD0nK8yNc24Dm-nv5CuCfOIcL9l-6fFQzRWBwUfhldxF10LDxLACmX0bGwtw7klfk9gG0DO5gja2lnRoKjaQa2I5j60AQ9s2YmeTRpP-hiY-g0LyfEBmNVCPtfmcAn7spOmlwmsToFAIze8fRzGvYfvNowGxO0NF7_6cVAPw/s3840/HOW%20TO%20HACK%20SOMEONE%20S%20PC%20WITH%20JUST%20A%20USB%20!(1).png',
          }}
          style={styles.cardImage}
        />

        <Text style={styles.cardDescription} numberOfLines={2}>
          In this video, we explain how a hacker can exploit a victim without
          revealing their identity using a remote access tool and port
          forwarding via RDP.
        </Text>

        <View style={styles.socialMediaContainer}>
          <TouchableOpacity>
            <Text style={styles.socialMedia} onPress={() => openWebstie('https://deadsecurity-india.blogspot.com/2022/07/CYPHER-RAT-SETUP-AND-PORT-FORWARDING.html')}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.socialMedia} onPress={() => openWebstie('https://www.linkedin.com/in/ezmohit/')}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 12,
    color: 'black',
  },
  card: {
    backgroundColor: '#192A56',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#ff4757',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    margin: 12,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#ff4757',
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  cardDescription: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 12,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  socialMedia: {
    fontSize: 16,
    color: '#ff4757',
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ff4757',
    textAlign: 'center',
  },
});
