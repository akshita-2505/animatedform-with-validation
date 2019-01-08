import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component<Props> {
    static navigationOptions = {
        header: null,
        title:"Login"
    };
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <ImageBackground source={require('../image/bg.jpeg')}
                                 style={{width: '100%', height: '100%',justifyContent:'center'}}>
                    <View style={{paddingBottom: 70,alignItems:'center'}}>
                        <Icon name="star" size={120} color="black"/>
                    </View>
                    <View style={{flexDirection:'row',marginBottom: 10}}>
                        <View style={{flex:1,justifyContent:"center"}}>
                            <Icon name="user-o" size={30} color="black" style={{marginLeft: 10}}/>
                        </View>

                        <View style={{flex:6,justifyContent:'center'}}>
                            <TextInput style={{borderWidth:1,borderRadius:20,
                                color: 'white',height:33,marginRight: 10,paddingLeft: 10}}
                                       placeholder="Username">
                            </TextInput>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,justifyContent:"center"}}>
                            <Icon name="envelope" size={30} style={{marginLeft: 10}}/>
                        </View>


                        <View style={{flex:6,justifyContent:'center'}}>
                            <TextInput style={{borderWidth:1,borderRadius:20,
                                color: 'white',height:33,marginRight: 10,paddingLeft: 10}}
                                       placeholder="Email">
                            </TextInput>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,justifyContent:"center"}}>
                            <Icon name="key" size={30} style={{marginLeft: 10}}/>
                        </View>


                        <View style={{flex:6,justifyContent:'center',marginTop: 10}}>
                            <TextInput style={{borderWidth:1,borderRadius:20,
                                color: 'white',height:33,marginRight: 10,paddingLeft: 10}}
                                       placeholder="Password">
                            </TextInput>
                        </View>
                    </View>
                    <TouchableOpacity style={{alignItems:'center'}} onPress={()=>this.props.navigation.navigate('Registration')}>
                        <Text style={{fontSize: 28,paddingTop: 20}}>Login</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
