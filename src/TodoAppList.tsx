import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';

const TodoAppList = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  //const [totdos, setTodos] = useState([]);
  const [editTodoId, setEditTodoId] = useState(null);
  const [isError, setIsError] = useState(false);


  interface Todo {
    id: string;
    title: string;
    description: string;
  }

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Title cannot be empty.');
      return;
    }

    if (!description.trim()) {
      Alert.alert('Error', 'Description cannot be empty.');
      return;
    }

    if (editTodoId) {
      // Edit existing todo
      setTodos(
        todos.map((todo: Todo) =>
          todo.id === editTodoId ? { id: todo.id, title, description } : todo
        )
      );
      setEditTodoId(null);
    } else {
      // Add new todo
      setTodos([...todos, { id: new Date().getTime().toString(), title, description }]);
    }
    setTitle('');
    setDescription('');
  };

  const handleEditTodo = (todo: any) => {
    setTitle(todo.title);
    setDescription(todo.description);
    setEditTodoId(todo.id);
  }

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };



  const renderItem = ({ item }: { item: Todo }) => (

    <View style={styles.todoItem}>
      <Text style={styles.todoTitle}>{item.title}</Text>
      <Text>{item.description}</Text>


      <View style={styles.buttonContainer}>

        <TouchableOpacity onPress={() => handleEditTodo(item)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>


    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View><Text>This is testing app</Text></View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <Button title={editTodoId ? 'Edit Todo' : 'Add Todo'} onPress={handleAddTodo} />
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  todoItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: 'lightblue',
    padding: 8,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: 'lightcoral',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default TodoAppList;