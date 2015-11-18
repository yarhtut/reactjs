/**
 * Created by yhtut on 13/11/15.
 */
import React from 'react';
import EventManagerComponent from './event-manager-component';

var props = {
    source: '/reactjs/event-manager/fetch'
};

React.render(
    <EventManagerComponent {...props} />,
    document.getElementById('event-manager-component-wrapper')
);
