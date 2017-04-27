import { TabNavigator, StackNavigator } from 'react-navigation';
import RecentChatsScreen from '../components/RecentChatsScreen';
import AllContactsScreen from '../components/AllContactsScreen';
import ChatScreen from '../components/ChatScreen';

const MainScreenNavigator = TabNavigator({
  Recent: {
    screen: RecentChatsScreen
  },
  All: {
    screen: AllContactsScreen
  }
});

export const SimpleApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'My Chats'
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      title: ({ state }) => `${state.params.user}`
    }
  }
});
