/**
 * Created by yhtut on 13/11/15.
 */
import React from 'react';

class EventComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='event-component row'>
                <h2>{this.props.title}</h2>
                <p>Date: {this.props.date}</p>
                <p>{this.props.description}</p>
                <div className="spam row">
                <a className="btn btn-default" href="">Spam {this.props.spam}</a>
                <a className="btn btn-default" href="">Delete </a>
                </div>
            </div>
        );
    }
}
//propTypes come from react
//good pratise

EventComponent.propTypes = {
    title: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
}

export default EventComponent;
