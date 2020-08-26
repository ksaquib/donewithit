import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "Saquib Khan",
    description: "Hey! Is this item still available?",
    image: require("../assets/saquib.jpg"),
  },
  {
    id: 2,
    title: "Saquib Khan",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/saquib.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Adil Ansari",
              description: "D2",
              image: require("../assets/saquib.jpg"),
            },
            {
              id: 3,
              title: "Zain Shaikh",
              description: "D2",
              image: require("../assets/saquib.jpg"),
            },
            {
              id: 4,
              title: "Saquib Khan",
              description: "D2",
              image: require("../assets/saquib.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
