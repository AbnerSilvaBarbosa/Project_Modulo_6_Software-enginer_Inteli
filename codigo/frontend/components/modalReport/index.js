import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image, TextInput} from 'react-native';
import Checkbox from 'expo-checkbox';

import styles from './style'

export function ModalCompliance({modalVisible,setModalVisible}){

  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={require('../../assets/alert.png')} />
            <Text style={styles.warnText}>Are you sure you want to complaint this project ?</Text>
            <View style={{flexDirection: 'row', marginBottom: 20, gap: 10}}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
              />
              <Text style={{color: 'gray'}}>Inapropriate Lenguage</Text>
              <Checkbox
                style={styles.checkbox}
                value={isChecked2}
                onValueChange={setChecked2}
                color={isChecked2 ? '#4630EB' : undefined}
              />
              <Text style={{color: 'gray'}}>Unethical project</Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 20, gap: 10}}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked3}
                onValueChange={setChecked3}
                color={isChecked3 ? '#4630EB' : undefined}
              />
              <Text style={{color: 'gray'}}>Obecene name</Text>
              <Checkbox
                style={styles.checkbox}
                value={isChecked4}
                onValueChange={setChecked4}
                color={isChecked4 ? '#4630EB' : undefined}
              />
              <Text style={{color: 'gray'}}>Lorem Ispum</Text>
            </View>
            <View style={{marginBottom: 30,}}>
              <Text style={{alignSelf: 'flex-start', color: 'gray', marginBottom: 2,}}>Feedback</Text>
              <TextInput style={styles.inputStyle}/> 
            </View>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeTextStyle}>Finish</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

