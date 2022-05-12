import { StyleSheet, Text, View, Image, Button } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  const { navigation } = props;

  const redirectToHome = () => {
    navigation.navigate("Home");
    navigation.closeDrawer();
  };
  return (
    <View style={styles.drawer.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawer.header}>
          <View>
            <Text>John Doe</Text>
            <Text>example@email.com</Text>
          </View>
          <Image
            style={styles.drawer.header.image}
            source={{
              uri: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
            }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.drawer.footer}>
        <Text onPress={redirectToHome}>Log Out</Text>
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: "title",
        headerStyle: {
          backgroundColor: "#BBB8B2",
          elevation: 0,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen component={Home} name="Home"></Drawer.Screen>
      <Drawer.Screen component={Task} name="Task"></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Button onPress={() => navigation.navigate("Task")} title="Go to task" />
    </View>
  );
};

const Task = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Task!</Text>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    marginBottom: 20,
  },
  drawer: {
    container: {
      flex: 1,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 20,
      image: {
        width: 60,
        height: 60,
        borderRadius: 30,
      },
    },
    footer: {
      position: "absolute",
      padding: 20,
      bottom: 30,
      left: 0,
      right: 0,
      backgroundColor: "#BBB8B2",
    },
  },
});
