import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
// import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

export default function HomeScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView style={styles.header}>
        <Text style={styles.title}>TrekPoint</Text>
        <Pressable style={styles.profileButton} onPress={() => router.push('/profile')}>
          <Text style={styles.profileIcon}>👤</Text>
        </Pressable>
      </SafeAreaView>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Type a trail or location"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Pressable
          style={styles.searchIcon}
          onPress={() => {
            console.log('Search submitted:', searchText);
          }}
        >
          <Text>🔍</Text>
        </Pressable>
      </View>

      {/* Placeholder instead of MapView */}
      <View style={styles.mapContainer}>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>[ Map Placeholder – Web version ]</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  profileButton: {
    padding: 8,
  },
  profileIcon: {
    fontSize: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 16,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
  },
  searchIcon: {
    paddingHorizontal: 8,
  },
  mapContainer: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 20,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  placeholderText: {
    color: '#888',
    fontStyle: 'italic',
  },
});
