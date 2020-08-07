import React, { useEffect, memo } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        return () => {
            console.log('[Cockpit.js] useEffect unload');
        }
    }, []);
useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')
    return () => {
        console.log('[Cockpit.js] 2nd useEffect unload');
    }
})

    const assignedClasses = [];
    
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default memo(cockpit);