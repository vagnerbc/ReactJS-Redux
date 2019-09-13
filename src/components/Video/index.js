import React from 'react'

import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => (
   
    <div>
        <strong>Modulo {activeModule.title}</strong>
        <span>Aula {activeLesson.title}</span>
    </div>
     
);

export default connect(state => ({
    activeLesson: state.courseReducer.activeLesson,
    activeModule: state.courseReducer.activeModule
}))(Video);
