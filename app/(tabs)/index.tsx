import { Image } from 'expo-image';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/login.png')}
          style={styles.reactLogo}
        />
      </View>
      <ThemedText type="title">Welcome to the App!</ThemedText>
      

      <View style={styles.buttonGroup}>
       
        <CustomButton title="🔐 Login" onPress={() => router.push('/login')} />
        <CustomButton title="🧾 Register" onPress={() => router.push('/register')} />
      </View>
    </ThemedView>
  );
}

function CustomButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    height: 100,
    width: 200,
    marginBottom: 10,
  },
  reactLogo: {
    height: 100,
    width: 200,
    resizeMode: 'contain',
  },
  buttonGroup: {
    gap: 12,
    width: '100%',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
