import React from 'react'

import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => (
   
    <div>
        <strong>Modulo {activeModule.title}</strong>
        <span>Aula {activeLesson.title}</span>
    </div>
     
);

const mapStateToProps = (state) => ({
    activeLesson: state.courseReducer.activeLesson,
    activeModule: state.courseReducer.activeModule
});

export default connect(mapStateToProps)(Video);
