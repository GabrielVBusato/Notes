import { Alert } from 'react-native';

const INITIAL_STATE = {
    activeNote: [],
    notes: [],
    index: 0,
}

export default function notes(state = INITIAL_STATE, actions) {
    switch (actions.type) {
        case "DELETE_NOTE": {
            return { ...state, notes: state.notes.filter((x) => x.index !== state.activeNote.index) }
        }
        case "ADD_NOTE":
            return { ...state, notes: state.notes.concat(actions.note), index: state.index + 1 }
        case "EDIT_NOTE": {
            let notesArray = state.notes;
            notesArray[state.notes.findIndex((x) => x.index === state.activeNote.index)] = actions.note;
            return { ...state, notes: notesArray }
        }
        case "SET_ACTIVE_NOTE":
            return { ...state, activeNote: actions.note }
    }
    return state;
}