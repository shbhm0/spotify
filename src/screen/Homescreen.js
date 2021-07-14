import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, Modal ,Platform} from 'react-native'
import { vh, vw, normalize } from '../dimension/dimension'
import CustomTextInput from '../customs/customTextInput'
import Button from '../customs/button'
import SignIn from '../screen/signin'
import SignUp from '../screen/signup'
import { Dimensions } from 'react-native'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backImage}
                    source={require('../assets/spotify_collage.png')}
                >
                    <View style={styles.upperContainer}>
                        <View style={styles.textContainer}>
                        <Image style={styles.logoImg} source={require('../assets/spotify_logo_white.png')} />
                            <Text style={styles.quatationText}>Millions of songs.</Text>
                            <Text style={styles.quatationText}>Free on Spotify.</Text>
                        </View>
                    </View>
                    </ImageBackground>
                    <View style={styles.lowerContainer}>
                        <View style={styles.buttonContainer}>
                        <Button
                            height={Platform.OS==="ios"? 45:60}
                            width={300}
                            imageSource={null}
                            color='black'
                            borderColor='transparent'
                            backgroundColor='green'
                            buttonText='Sign up free'
                            onPress={() => this.props.navigation.navigate('SignUp')}
                        />
                        <Button
                            height={Platform.OS==="ios"? 45:60}
                            width={300}
                            color='white'
                            borderColor='grey'
                            buttonText='Continue with phone number'
                            imageSource={require('../assets/mobile.png')}
                        />
                        <Button
                            height={Platform.OS==="ios"? 45:60}
                            width={300}
                            color='white'
                            borderColor='grey'
                            buttonText='Continue with Google'
                            imageSource={require('../assets/google.png')}
                            onPress={()=>alert('Coming Soon')}
                        />
                        <Button
                            height={Platform.OS==="ios"? 45:60}
                            width={300}
                            color='white'
                            borderColor='grey'
                            buttonText='Continue with Facebook'
                            imageSource={require('../assets/facebook.png')}
                            onPress={()=>alert('Coming Soon')}
                        />
                        {Platform.OS==='ios'?
                        <Button
                            height={45}
                            width={300}
                            color='white'
                            borderColor='grey'
                            buttonText='Continue with Apple'
                            imageSource={require('../assets/apple.png')}
                            onPress={()=>alert('Coming Soon')}
                        />
                    :null}
                        <Text style={styles.loginText} onPress={() => this.props.navigation.navigate('SignIn')}>Log in</Text>
                        </View>
                    </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    backImage: {
        flex:0.7
    },
    upperContainer: {
        flex: 3,
        backgroundColor: 'rgba(0,0,0,0.82)',
    },
    lowerContainer: {
        flex: 0.8,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.85)'
    },
    logoImg: {
        marginTop: vh(10),
        marginBottom:vh(10),
        height: normalize(55),
        width: normalize(55)
    },
    quatationText: {
        color: 'white',
        fontSize:Platform.OS==="ios"?vh(29):vh(32),
        fontWeight: '700',
        marginBottom: vh(10)
    },
    textContainer: {
        alignItems:'center',
        justifyContent:'center',
        top:vh(200)
    },
    loginText: {
        color: 'white',
        fontWeight: '500',
        marginTop: vh(20),
        fontSize:Platform.OS==="ios"?16:vh(17)
    },
    buttonContainer:{
        marginTop:vh(30),
        alignItems:'center'
    }
})