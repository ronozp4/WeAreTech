import React, {FC, useEffect, useState} from 'react';
import { Modal, StyleSheet, Text, TextInput,  Pressable, View} from 'react-native';
import { useAppContext } from '../contexts/AppContext';
import ColorSelect from './ColorSelect';
import { isLandscape } from '../services/utils'

interface PopUpProps {
  modalVisible: boolean
  closeModal: () => void
}

const PopUp: FC<PopUpProps> = ({modalVisible, closeModal}) => {
  const { data, updateData, selectedItem } = useAppContext();
  const [text, onChangeText] = useState(data[selectedItem]?.title || '');
  const [tempColor, setTempColor] = useState(data[selectedItem]?.color|| '');
  const [colorModal, setColorModal] = useState(false);
  
  // Accept changes
  const onAccept = () => {
    data[selectedItem].title = text;
    data[selectedItem].color = tempColor;
    updateData([...data])
    closeModal()
  }
  const OnAcceptColor = (color: string) => {
    setTempColor(color)
  }

  // set input text before open modal
  useEffect(() => { 
    onChangeText(data[selectedItem]?.title || '')
  }, [selectedItem])

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={closeModal}>
            <View style={[styles.modalView, isLandscape()? styles.row:{}]}>
              <View style={styles.colorContainer}>
              <Text style={styles.modalText}>Select New Color:</Text>
            {colorModal && <View style={styles.colorPicker}>
              <ColorSelect 
                onComplite={OnAcceptColor}
                color={tempColor || ''} 
                />
              </View>}
            <View style={styles.row}>
            <View style={[styles.colorCircle, {backgroundColor: tempColor}]} />

            <Pressable
              style={[styles.button, styles.buttonNormal]}
              onPress={()=>setColorModal(!colorModal)}>
              <Text style={styles.textStyle}>{colorModal? 'Close' : 'Open'} Color Select</Text>
            </Pressable>

              </View>
            
              </View>
              <View style={styles.titleContainer}>
            <Text style={styles.modalText}>Choose New Title:</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
             />
           
            <View style={styles.row}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={closeModal}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonNormal]}
              onPress={onAccept}>
              <Text style={styles.textStyle}>Apply Changes</Text>
            </Pressable>
            </View>
            </View>
          </View>
      </Modal>
   </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    marginTop: 5,
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  colorContainer: {
    alignItems: 'center',
    width: '50%',
  },
  titleContainer: {
    alignItems: 'center',
    width: '50%',
  },
  colorPicker: {
    height: 200,
    width: '80%'
  },
  colorCircle: {
    backgroundColor: 'black',
    height: 20,
    width: 20,
    borderRadius: 70,
    alignSelf: 'center',
    margin: 5
  },
  row: {
    flexDirection: 'row'
  },
  input: {
    height: 40,
    width: 120,
    margin: 10,
    borderWidth: 1,
    padding: 8,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#eb1f1f',
  },
  buttonNormal: {
    backgroundColor: '#272ee7',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default PopUp;