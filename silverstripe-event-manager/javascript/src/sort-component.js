import React from 'react';


class SortComponent extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this)

    }

    render(){
      var options = this.props.options.map((option, i) => {

        return (
          <option key={i}>
            {option}

          </option>
        )

      });
      return (
        <div className="component row">
          <select value={this.props.value} onChange={this.onChange} >
            {options}
          </select>
        </div>
      )

    }
    onChange(event){
      this.props.updateSortOrder(event.target.value)
    }

};





export default SortComponent;
