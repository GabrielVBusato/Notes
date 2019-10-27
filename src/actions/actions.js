export function deleteNote(){
    return {
        type: 'DELETE_NOTE',
    };
}

export function addNote(note){
    return {
        type: 'ADD_NOTE',
        note
    };
}

export function editNote(note){
    return {
        type: 'EDIT_NOTE',
        note
    };
}

export function setActiveNote(note){
    return {
        type: 'SET_ACTIVE_NOTE',
        note
    };
}


