import React from 'react';
import { StatusBar, View, StyleSheet, Dimensions, Text, Button } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
var { width, height } = Dimensions.get('window');
class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <Container>
                <StatusBar></StatusBar>
                <Content>
                    <View style={styles.container}>
                        <Text>We have { this.props.mine.current.length } friends!</Text>
                        <Button
                            title="Add some friends"
                            onPress={() =>
                                this.props.navigation.navigate('Dashboard')
                            }
                        />
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:width,
        height:height-StatusBar.currentHeight
    },
});

const mapStateToProps = (state) => {
    const { mine } = state
    return { mine }
  };
  
export default connect(mapStateToProps)(LoginScreen);




