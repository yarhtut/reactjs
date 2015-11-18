/**
 * Created by yhtut on 13/11/15.
 */

import React from 'react';
import $ from 'jquery';
import EventComponent from './event-component';
import SortComponent from './sort-component';


class EventManagerComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            events: [],
            sortOrder: "date",
        };

        this.updateSortOrder = this.updateSortOrder.bind(this);


    }

    //need to look into it
    //----------1-------------

    componentDidMount() {
        $.getJSON(this.props.source, this.handleNewEventData.bind(this));
    }

    //
    render() {
        var events = this.state.events.map((event, i) => {
            var props = {
                title: event.title,
                date: event.date,
                description: event.description,
                spam: event.spam,
              };
            //key is react to keep track  basically to
            return <EventComponent key={i} {...props} />
        });

        var sortComponentProps = {
          options : ["title", "date"],
          value: this.state.sortOrder,
          updateSortOrder: this.updateSortOrder

        }
        return (
            <div className='event-manager-component'>
                <SortComponent  {...sortComponentProps}/>
                {events}
            </div>
        );
    }
    //update sort order
    updateSortOrder(sortOrder){
      this.setState({
        sortOrder : sortOrder
      })
    }

    //------------2------------
    handleNewEventData(data) {
        this.setState({
            events: data.events
        });
    }
}

EventManagerComponent.propTypes = {
    source: React.PropTypes.string.isRequired
}

export default EventManagerComponent;
