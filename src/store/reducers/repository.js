const INITIAL_STATE = {
    repositories: [{
        title: "test"
    }]
}

export default function reporitoryReducer(state = INITIAL_STATE, action) {
    if (action.type === 'SET_REPOSITORIES') {
        return { 
            ...state, 
            repositories: action.repositories
        };
    }

    return state;
}