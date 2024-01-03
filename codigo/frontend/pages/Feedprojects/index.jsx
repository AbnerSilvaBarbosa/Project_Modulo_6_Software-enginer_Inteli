import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

import styles from './style'

import { CardProject } from '../../components/cardproject';

// props: infos the cardsProjects
export function FeedProject() {
  return (
    <View style={styles.align}>
      <SafeAreaView>
        <ScrollView>
          <CardProject />
          <CardProject />
          <CardProject />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

