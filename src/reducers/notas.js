const INITIAL_STATE = {
    activeNote: [],
    notes: [],
}

export default function notes(state = INITIAL_STATE, actions) {
    switch (actions.type) {
        case "DELETE_NOTE":
        case "ADD_NOTE":
            return { ...state, notes: state.notes.concat(actions.note)}
        case "EDIT_NOTE":
    }
    return state;
}