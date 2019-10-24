export function deleteNote(note){
    return {
        type: 'DELETE_NOTE',
        note
    };
}
