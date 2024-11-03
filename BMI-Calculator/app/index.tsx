import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (h && w) {
      const bmiValue = w / (h * h);
      setBmi(bmiValue);
      setCategory(getBMICategory(bmiValue));
    }
  };

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    else if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    else return 'Obesity';
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter height in meters"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter weight in kg"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {bmi && (
        <View style={styles.result}>
          <Text style={styles.resultText}>BMI: {bmi.toFixed(2)}</Text>
          <Text style={styles.resultText}>Category: {category}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
