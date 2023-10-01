import { useState } from "react";
import { View } from "react-native"
import SoundButton from "../components/SoundButton";
import { loadSound, playSound } from "../services/SoundManager";
import PopUp from "../components/PopUp";
import { useAppContext } from "../contexts/AppContext";
const HomeScreen = () => {
    const { data, updateData } = useAppContext();
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [loadedArray, setLoadedArray] = useState<boolean[]>(new Array(8).fill(false));

    const handleLoadSound = (soundUrl: string, id: string, index: number) => {
        loadedArray[index] = true
        setLoadedArray([...loadedArray])
        loadSound(soundUrl, id);
        setTimeout(() => {
            setLoadedArray(prev => {
                prev[index] = false
                return [...prev]} )
        }, 1000)
        data[index].isLoaded = true
        updateData([...data])
    };

    const handlePress = (soundData: string, id: string, index: number) => {
        if (data[index]?.isLoaded) {
            playSound(id)
        } else {
            handleLoadSound(soundData, id, index)
        }
    }

    return (
        <View style={{ height: '100%', justifyContent: 'space-evenly' }}>
            {data.map(
                (sound, index) => <SoundButton
                    color={sound?.color || 'black'}
                    key={sound._id}
                    index={index}
                    loading={loadedArray[index]}
                    onPress={() => handlePress(sound?.soundData, sound?._id, index)}
                    title={sound?.title}
                    toggleVisible={() => setModalVisible(!modalVisible)}
                />)}
            <View>
            </View>
            <PopUp modalVisible={modalVisible} closeModal={() => setModalVisible(false)} />
        </View>
    )
}

export default HomeScreen;