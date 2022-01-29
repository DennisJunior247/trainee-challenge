import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home";
import RecipieDetails from "../../screens/RecipeDetails";
import colors from "../../config/colors";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="CheckOutScreen">
      <Stack.Screen
        name="CheckOutScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreditCard"
        component={RecipieDetails}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: colors.primary },
        }}
      />
    </Stack.Navigator>
  );
}

export default App;