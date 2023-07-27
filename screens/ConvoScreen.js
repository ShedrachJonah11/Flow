import React, { useState } from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Platform,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Dimensions,
} from 'react-native'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'

import SPACING from '../config/SPACING'
import { RFValue } from 'react-native-responsive-fontsize'

import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('screen')

const ConvoScreen = () => {
    const [message, setMessage] = useState('')
    const [chat, setChat] = useState([
        {
            message: 'Hey, How are you? Please i need assistance',
            sender: 'user',
            time: 'TUE, 2:30PM',
        },
        {
            message: 'Hello! How may i assist you today',
            sender: 'agent',
            time: 'TUE, 2:30PM',
        },
    ])

    const handleMessageSend = () => {
        if (message.trim() !== '') {
            const newMessage = {
                message,
                sender: 'user',
                time: getCurrentTime(),
            }
            setChat((prevChat) => [...prevChat, newMessage])
            setMessage('')
        }
    }

    const getCurrentTime = () => {
        const currentDate = new Date()

        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
        const day = days[currentDate.getDay()]

        let hours = currentDate.getHours()
        const minutes = currentDate.getMinutes()
        const amPm = hours >= 12 ? 'PM' : 'AM'

        hours = hours % 12 || 12

        const formattedTime = `${day}, ${hours}:${
            minutes < 10 ? `0${minutes}` : minutes
        }${amPm}`
        return formattedTime
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgCon}>
                <TouchableOpacity
                >
                    <MaterialIcons
                        style={styles.arrow}
                        name="arrow-back-ios"
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
                <Image
                    source={require('../assets/images/friend1.png')}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                    }}
                />
            </View>

            <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Anika</Text>
                </View>
            </View>

            <ScrollView>
                <View style={styles.contain}>
                    {chat.map((messageObj, index) => (
                        <View key={index} style={styles.feature}>
                            {messageObj.sender === 'agent' ? (
                                <>
                                    <Image
                                        source={require('../assets/images/friend1.png')}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                        }}
                                    />

                                    <View style={styles.chatBox}>
                                        <Text>{messageObj.message}</Text>
                                        <View style={styles.time}>
                                            <Text style={styles.timeText}>
                                                {messageObj.time}
                                            </Text>
                                        </View>
                                    </View>
                                </>
                            ) : (
                                <>
                                    <View style={styles.chatBox}>
                                        <Text>{messageObj.message}</Text>
                                        <View style={styles.time}>
                                            <Text style={styles.timeText}>
                                                {messageObj.time}
                                            </Text>
                                        </View>
                                    </View>
                                    <Image
                                        source={require('../assets/images/user2.jpg')}
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                        }}
                                    />
                                </>
                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.textInputContainer}
            >
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Write your message..."
                        value={message}
                        onChangeText={setMessage}
                    />
                    <TouchableOpacity
                        style={styles.sendIcon}
                        onPress={handleMessageSend}
                    >
                        <FontAwesome name="send" color={'blue'} size={24} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#f2f2f2',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: SPACING * 2,
        paddingTop: Platform.OS === 'ios' ? SPACING * 2 : SPACING,
        paddingBottom: SPACING,
    },
    headerTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    contain: {
        marginTop: SPACING * 38,
    },
    feature: {
        paddingHorizontal: SPACING * 2,
        paddingVertical: SPACING * 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chatBox: {
        backgroundColor: '#fff',
        padding: SPACING * 1.5,
        borderRadius: 10,
        width: width / 1.5,
    },
    textInputContainer: {
        paddingHorizontal: SPACING * 2,
        paddingVertical: SPACING,
        marginBottom: -35,
        backgroundColor: '#E1E1E1',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 17,
        paddingHorizontal: SPACING,
        marginBottom: SPACING * 3,
    },
    sendIcon: {
        marginLeft: SPACING,
        marginTop: -21,
    },
    time: {
        paddingHorizontal: SPACING * 2,
        marginTop: SPACING,
    },
    timeText: {
        fontSize: RFValue(10),
        textAlign: 'right',
        color: '#999',
    },
    imgCon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SPACING * 2,
    },
    arrow: {
        marginRight: Platform.OS === 'ios' ? SPACING * 13.6 : SPACING * 12.7,
        marginLeft: SPACING * 2,
    },
})

export default ConvoScreen
