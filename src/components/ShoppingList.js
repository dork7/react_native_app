import 'react-native-get-random-values';
import React, { useState } from 'react';
// import { FlatList, View, Text } from 'react-native-web';
import { v4 as uuid } from 'uuid';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
const ListItem = ({ item, removeItems }) => {
  const itemPressed = (item) => {
    removeItems(item.id);
  };
  return (
    <TouchableOpacity onPress={() => itemPressed(item)}>
      <View style={styles.listItems}>
        <Text style={styles.listItemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ItemInput = ({ addItem }) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Add Item"
      />
    </View>
  );
};
const initState = [
  { id: uuid(), name: 'orange' },
  { id: uuid(), name: 'apple' },
  { id: uuid(), name: 'mango' },
  { id: uuid(), name: 'banana' },
  { id: uuid(), name: 'peach' },
  { id: uuid(), name: 'amazing fruit' },
  { id: uuid(), name: 'berry' },
];
const ShoppingList = () => {
  const [itemList, setItemList] = useState(initState);
  const [deletedItemList, setDeletedItemList] = useState([]);
  const removeItems = (id) => {
    setDeletedItemList([
      ...deletedItemList,
      ...itemList.filter((item) => item.id === id && item),
    ]);
    setItemList(itemList.filter((item) => item.id !== id));
  };

  const reset = () => {
    setItemList(initState);
    setDeletedItemList([]);
  };

  return (
    <View style={{ justifyContent: 'space-between' }}>
      <FlatList
        data={itemList}
        renderItem={({ item }) => <ListItem {...{ item, removeItems }} />}
      />

      <TouchableOpacity
        style={{
          height: 50,
          marginTop: 10,
          backgroundColor: '#22255a',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={reset}
      >
        <Text style={{ color: '#FFF' }}>RESET</Text>
      </TouchableOpacity>
      <FlatList
        data={deletedItemList}
        renderItem={({ item }) => <ListItem {...{ item, removeItems }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  listItems: {
    margin: 4,
    padding: 20,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ShoppingList;
