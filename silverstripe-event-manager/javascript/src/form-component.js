
import React from 'react';

class FormComponent extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
          return (
        <div className="spam row">
        <a className="btn btn-default" href="">Spam {this.props.spam}</a>
        <a className="btn btn-default" href="">Delete {this.props.delete}</a>
        </div>
        );
    }

    onSubmit(){
      console.log("onSubmit+hit function");


      //this.preventDefault();



    }
}

export default FormComponent;
