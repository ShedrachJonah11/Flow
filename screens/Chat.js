import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Platform,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native'
import React from 'react'
import SPACING from '../config/SPACING'
import { MaterialIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

import { useNavigation } from '@react-navigation/native'

const Chat = () => {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* <View style={styles.header}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>Conversation</Text>
                    </View>
                </View> */}

                <View style={styles.conversationBar}>
                    <View style={styles.conversationBarContainer}>
                        <View style={styles.conversationBarImageContainer}>
                            <Image
                                source={require('../assets/images/friend1.png')}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ConvoScreen')}
                        >
                            <View style={styles.conversationBarTextContainer}>
                                <Text style={styles.conversationBarText}>
                                    Anika
                                </Text>
                                <Text style={styles.conversationBarSubText}>
                                    Hey, how are you?
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.conversationBar}>
                    <View style={styles.conversationBarContainer}>
                        <View style={styles.conversationBarImageContainer}>
                            <Image
                                source={require('../assets/images/friend2.png')}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ConvoScreen')}
                        >
                            <View style={styles.conversationBarTextContainer}>
                                <Text style={styles.conversationBarText}>
                                    Manish
                                </Text>
                                <Text style={styles.conversationBarSubText}>
                                    Hey, how are you?
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.conversationBar}>
                    <View style={styles.conversationBarContainer}>
                        <View style={styles.conversationBarImageContainer}>
                            <Image
                                source={require('../assets/images/friend3.png')}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ConvoScreen')}
                        >
                            <View style={styles.conversationBarTextContainer}>
                                <Text style={styles.conversationBarText}>
                                    Priya
                                </Text>
                                <Text style={styles.conversationBarSubText}>
                                    Hey, how are you?
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.conversationBar}>
                    <View style={styles.conversationBarContainer}>
                        <View style={styles.conversationBarImageContainer}>
                            <Image
                                source={require('../assets/images/friend4.png')}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ConvoScreen')}
                        >
                            <View style={styles.conversationBarTextContainer}>
                                <Text style={styles.conversationBarText}>
                                    Rahul
                                </Text>
                                <Text style={styles.conversationBarSubText}>
                                    Hey, how are you?
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.conversationBar}>
                    <View style={styles.conversationBarContainer}>
                        <View style={styles.conversationBarImageContainer}>
                            <Image
                         source={require('../assets/images/friend5.png')}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ConvoScreen')}
                        >
                            <View style={styles.conversationBarTextContainer}>
                                <Text style={styles.conversationBarText}>
                                    John
                                </Text>
                                <Text style={styles.conversationBarSubText}>
                                    Hey, how are you?
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
        backgroundColor: '#0E0091',
    },
    headerTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    conversationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: SPACING * 2,
        paddingTop: Platform.OS === 'ios' ? SPACING * 2 : SPACING,
        marginBottom: SPACING - 20,
    },
    conversationBarImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    conversationBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: Platform.OS === 'ios' ? SPACING * 2 : SPACING,
        paddingBottom: SPACING,
    },
    conversationBarTextContainer: {
        flex: 1,
        paddingLeft: SPACING,
    },
    conversationBarText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 5,
    },
    conversationBarSubText: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#000',
    },
})

export default Chat
