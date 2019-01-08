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
        title:"Registration"
    };
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            pass:"",
            pNo:"",
            cpass:"",
            data:[]
        }
    }
    registerApi=()=>
    {
        const {navigate} = this.props.navigation;
        fetch('http://localhost:3000/StudentDetails', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.pass,
                pNo : this.state.pNo,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                //return responseJson;
                this.setState({data:responseJson});
                navigate('Login')
            })
            .catch((error) => {
                console.error(error);
            });
    }
    emailValidation= () =>
    {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) === true) {
            this.checkPass()
        }else{}
    }
    phoneValidation=()=>{
        const reg = /^[0-9]{10}$/;
        if (reg.test(this.state.pNo) === true) {
            this.emailValidation()
        }
    }
    // passValidation=()=>{
    //     debugger
    //     const reg = /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/;
    //     if (reg.test(this.state.pass) === true) {
    //         this.registerApi()
    //     }
    // }
    checkPass=()=>{
        if(this.state.pass === this.state.cpass){
            this.registerApi()
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <ImageBackground source={require('../image/bg.jpeg')}
                                 style={{width: '100%', height: '100%',justifyContent:'center'}}>

                    <View style={{flexDirection:'row',marginBottom: 10}}>
                        <View style={{flex:1,justifyContent:"center"}}>
                            <Icon name="user-o" size={30} color="black" style={{marginLeft: 10}}/>
                        </View>
                        <View style={styles.settext}>
                            <TextInput style={{borderWidth:1,borderRadius:20,
                                color: 'white',height:33,marginRight: 10,paddingLeft: 10}}
                                       placeholder="Username"
                                       onChangeText={(name)=>{this.setState({name})}}>
                            </TextInput>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,justifyContent:"center"}}>
                            <Icon name="mobile" size={40} style={{marginLeft: 15}}/>
                        </View>
                        <View style={styles.settext}>
                            <TextInput style={{borderWidth:1,borderRadius:20,
                                color: 'white',height:33,marginRight: 10,paddingLeft: 10}}
                                       placeholder="9685741230"
                                       keyboardType="numeric"
                                       onChangeText={(pNo)=>{this.setState({pNo})}}>
                            </TextInput>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,justifyContent:"center"}}>
                            <Icon name="envelope" size={30} style={{marginLeft: 10}}/>
                        </View>
                        <View style={styles.settext}>
                            <TextInput style={{borderWidth:1,borderRadius:20,
                                color: 'white',height:33,marginRight: 10,paddingLeft: 10}}
                                       placeholder="Email"
                                       onChangeText={(email)=>{this.setState({email})}}>
                            </TextInput>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,justifyContent:"center"}}>
                            <Icon name="key" size={30} style={{marginLeft: 10}}/>
                        </View>
                        <View style={styles.settext}>
                            <TextInput style={{borderWidth:1,borderRadius:20,
                                color: 'white',height:33,marginRight: 10,paddingLeft: 10}}
                                       placeholder="Password"
                                       secureTextEntry={true}
                                       onChangeText={(pass)=>{this.setState({pass})}}>
                            </TextInput>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,justifyContent:"center"}}>
                            <Icon name="key" size={30} style={{marginLeft: 10}}/>
                        </View>
                        <View style={styles.settext}>
                            <TextInput style={{borderWidth:1,borderRadius:20,
                                color: 'white',height:33,marginRight: 10,paddingLeft: 10}}
                                       placeholder="Confirm Password"
                                       secureTextEntry={true}
                                       onChangeText={(cpass)=>{this.setState({cpass})}}>
                            </TextInput>
                        </View>
                    </View>

                    <TouchableOpacity style={{alignItems:'center'}} onPress={()=>this.phoneValidation()}>
                        <Text style={{fontSize: 28,paddingTop: 20}}>Submit</Text>
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
    settext:{
        flex:6,
        justifyContent:'center',
        marginTop: 10
    }
});
