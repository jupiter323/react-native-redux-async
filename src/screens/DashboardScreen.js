import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriend } from '../Redux/MyActions';
class DashboardScreen extends React.Component {
  
    render() {
        return (
            <View style={styles.container}>
                <Text>Add friends here!</Text>
                {
                    this.props.mine.possible.map((friend, index) => (
                        <Button
                            key={friend}
                            title={`Add ${friend}`}
                            onPress={() =>
                                this.props.addFriend(index)
                            }
                        />
                    )
                    )
                }
                <Button
                    title="Back to home"
                    onPress={() =>
                        this.props.navigation.navigate('Login')
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const mapStateToProps = (state) => {
    const { mine } = state
    return { mine }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addFriend,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
