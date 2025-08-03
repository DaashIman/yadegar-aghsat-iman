import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert } from 'react-native';

const installments = [
  { id: '1', bank: 'صادرات', description: 'وام شرکتی', startDate: '2025-07-25', count: 25 },
  { id: '2', bank: 'مهر ایران', description: 'وام', startDate: '2025-07-31', count: 20 },
  { id: '3', bank: 'صندوق اهرم', description: 'صندوق ارز دیجیتال', startDate: '2025-08-14', count: 3 },
  { id: '4', bank: 'شرکت اسنوا', description: 'خرید لوازم خانگی', startDate: '2025-08-16', count: 20 },
];

export default function App() {
  const handleReminder = (item) => {
    Alert.alert("یادآور", `یادآوری برای قسط ${item.bank} - ${item.description}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>یادآور اقساط ایمان</Text>
      <FlatList
        data={installments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.bank} ({item.description})</Text>
            <Text style={styles.text}>شروع: {item.startDate}</Text>
            <Text style={styles.text}>تعداد اقساط: {item.count}</Text>
            <Button title="یادآوری" onPress={() => handleReminder(item)} />
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9f0',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#e0ffe0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});