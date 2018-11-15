import React from 'react';
import {AsyncStorage, View} from 'react-native';
import { NavigationActions } from 'react-navigation';

class SessionCheck extends React.Component{

    static navigationOptions = {
        header: null
    };

    componentWillMount() {
        const { navigate } = this.props.navigation;

        AsyncStorage.getItem('session', (err, session) => {
            console.log(session);
            console.log("hi123");
            if (session == 'ok') {

                this.props.navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Dashboard' })
                    ]
                }))

            } else{navigate('Login');}
        })
    }
    render(){
        return(<View/>
        
        );
    }
};

export default SessionCheck;