import React, {
  Component
} from "../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../../shared/dishes";
import { PROMOTIONS } from "../../shared/Promotions";
import { LEADERS } from "../../shared/Leaders";

function RenderItem(props) {
  const item = props.item;

  if (item != null) {
    return (
      <Card
        featuredTitle={item.name}
        featuredSubtitle={item.designation}
        image={require("../images/uthapizza.png")}
      >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <ScrollView>
        <RenderItem item={this.state.dishes.filter(dish => dish.featured)[0]} />
        <RenderItem
          item={this.state.promotions.filter(promo => promo.featured)[0]}
        />
        <RenderItem
          item={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      </ScrollView>
    );
  }
}

export default Home;
