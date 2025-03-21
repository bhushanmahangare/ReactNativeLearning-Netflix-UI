import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ToDo {
    id: string;
    title: string;
    description: string;
    completed: boolean;   
}

const ToDoApp = () => {
    const [ title, setTitle ] = useState<string>('');
    const [ description, setDescription ] = useState<string>('');
    const [ todos, setTodos ] = useState<ToDo[]>([]);
    const [ isCompleted, setIsCompleted ] = useState<boolean>(false);
    const [ isEditing, setIsEditing ] = useState<boolean>(false);
    const [ editingId, setEditingId ] = useState<string>('');
    const [ editingTitle, setEditingTitle ] = useState<string>('');
    const [ editingDescription, setEditingDescription ] = useState<string>('');
    const [ editingCompleted, setEditingCompleted ] = useState<boolean>(false);
    const [ isDeleting, setIsDeleting ] = useState<boolean>(false);
    const [ deletingId, setDeletingId ] = useState<string>('');
    const [ deletingTitle, setDeletingTitle ] = useState<string>('');
    const [ deletingDescription, setDeletingDescription ] = useState<string>('');
    const [ deletingCompleted, setDeletingCompleted ] = useState<boolean>(false);
    const [ isViewing, setIsViewing ] = useState<boolean>(false);
    const [ viewingId, setViewingId ] = useState<string>('');
    const [ viewingTitle, setViewingTitle ] = useState<string>('');
    const [ viewingDescription, setViewingDescription ] = useState<string>('');
    const [ viewingCompleted, setViewingCompleted ] = useState<boolean>(false);
    const [ isAdding, setIsAdding ] = useState<boolean>(false);
    const [ isUpdating, setIsUpdating ] = useState<boolean>(false);
    const [ isViewingAll, setIsViewingAll ] = useState<boolean>(false);
    const [ isViewingCompleted, setIsViewingCompleted ] = useState<boolean>(false);
    const [ isViewingUncompleted, setIsViewingUncompleted ] = useState<boolean>(false);
    const [ isViewingEditing, setIsViewingEditing ] = useState<boolean>(false);
    const [ isViewingDeleting, setIsViewingDeleting ] = useState<boolean>(false);
    const [ isViewingViewing, setIsViewingViewing ] = useState<boolean>(false);
    const [ isViewingAdding, setIsViewingAdding ] = useState<boolean>(false);
    const [ isViewingUpdating, setIsViewingUpdating ] = useState<boolean>(false);
    const [ isViewingAllCompleted, setIsViewingAllCompleted ] = useState<boolean>(false);
    const [ isViewingAllUncompleted, setIsViewingAllUncompleted ] = useState<boolean>(false);
    const [ isViewingAllEditing, setIsViewingAllEditing ] = useState<boolean>(false);
    const [ isViewingAllDeleting, setIsViewingAllDeleting ] = useState<boolean>(false);
    const [ isViewingAllViewing, setIsViewingAllViewing ] = useState<boolean>(false);
    const [ isViewingAllAdding, setIsViewingAllAdding ] = useState<boolean>(false);
    const [ isViewingAllUpdating, setIsViewingAllUpdating ] = useState<boolean>(false);
    const [ isViewingCompletedEditing, setIsViewingCompletedEditing ] = useState<boolean>(false);
    const [ isViewingCompletedDeleting, setIsViewingCompletedDeleting ] = useState<boolean>(false);
    const [ isViewingCompletedViewing, setIsViewingCompletedViewing ] = useState<boolean>(false);
    const [ isViewingCompletedAdding, setIsViewingCompletedAdding ] = useState<boolean>(false);
    const [ isViewingCompletedUpdating, setIsViewingCompletedUpdating ] = useState<boolean>(false);
    const [ isViewingUncompletedEditing, setIsViewingUncompletedEditing ] = useState<boolean>(false);
    const [ isViewingUncompletedDeleting, setIsViewingUncompletedDeleting ] = useState<boolean>(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleAddToDo = () =>  {
        if( !title.trim() ) {
            setError('Title is required');
            setIsError(true);
            return;
        }
        if( !description.trim() ) {
            setError('Description is required');
            setIsError(true);
            return;
        }
        const newToDo: ToDo = {
            id: new Date().getTime().toString(),
            title,
            description,
            completed: false
        }

        setTodos([...todos, newToDo]);  
        setTitle('');
        setDescription('');
        setError('');
        setIsError(false);
        setSuccess('ToDo added successfully');
        setIsSuccess(true);
    };

    const renderItem = ({ item }: { item: ToDo }) => {
        return (
            <View style={styles.todoItem}>
                <Text style={styles.todoTitle}>{item.title}</Text>
                {item.description ? <Text style={styles.todoDescription}>{item.description}</Text> : null}
            </View>
        );
    };

    return (
        <SafeAreaView>
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }} >
            <View style={{ flex: 1, padding: 10 }}>
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
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAddToDo}>
                    <Text style={styles.buttonText}>Add ToDo</Text>
                </TouchableOpacity> 
                {isError && <Text style={styles.error}>{error}</Text>}
                {isSuccess && <Text style={styles.success}>{success}</Text>}
                <FlatList
                    data={todos}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ToDoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
      },
      inputContainer: {
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          },
          android: {
            elevation: 2,
          },
        }),
      },
      input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
      },
      descriptionInput: {
        height: 80,
        textAlignVertical: 'top',
      },
      addButton: {
        backgroundColor: '#2196f3',
        borderRadius: 6,
        padding: 14,
        alignItems: 'center',
      },
      disabledButton: {
        backgroundColor: '#90caf9',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
      },
      errorText: {
        color: 'red',
        marginBottom: 8,
      },
      listContent: {
        paddingBottom: 20,
      },
      todoItem: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          },
          android: {
            elevation: 1,
          },
        }),
      },
      todoTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
        color: '#333',
      },
      todoDescription: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
      },
      emptyText: {
        textAlign: 'center',
        color: '#999',
        marginTop: 20,
        fontSize: 16,
      },
      error: {
        color: 'red',
        marginBottom: 8,
      },
        success: {
            color: 'green',
            marginBottom: 8,
        },
});    