import { combineReducers } from 'redux';

import courseReducer from './course';
import repositoryReducer from './repository';

export default combineReducers({
    courseReducer,
    repositoryReducer
});