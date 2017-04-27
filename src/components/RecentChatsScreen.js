import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class RecentChatsScreen extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}>
        <Text>List of recent chats</Text>
      </TouchableOpacity>
    );
  }
}

export default RecentChatsScreen;
