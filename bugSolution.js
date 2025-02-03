// bugSolution.js
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getUrlAsync = async () => {
      let url = await Linking.getInitialURL();
      if (url === null) {
        //Attempt multiple times before failing
        for (let i = 0; i < 5; i++) {
          await new Promise(resolve => setTimeout(resolve, 500));
          url = await Linking.getInitialURL();
          if (url !== null) break;
        }
      }
      setInitialUrl(url);
    };
    getUrlAsync();
  }, []);

  return (
    <View>
      {initialUrl ? (
        <Text>Initial URL: {initialUrl}</Text>
      ) : (
        <Text>No initial URL found.</Text>
      )}
    </View>
  );
}
