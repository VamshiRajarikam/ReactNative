import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { DISHES } from "../../shared/dishes";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  static navigationOptions = {
    title: "Menu"
  };

  render() {
    const renderMenuItem = ({ item, index }) => {
      return (
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
          hideChevron={true}
          onPress={() => navigate("Dishdetail", { dishId: item.id })}
          leftAvatar={{ source: require("../images/uthappizza.png") }}
        />
      );
    };
    const { navigate } = this.props.navigation; // FlatList is creating ListItem with storing data,
    // When renderMenuItem method is called, it will render items with the one data at once.
    //ListItem will create each item with specified details with key, title etc.,
    return (
      <FlatList
        data={this.state.dishes}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}
export default Menu;
