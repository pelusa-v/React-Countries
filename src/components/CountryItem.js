import React from 'react';

class CountryItem extends React.Component {

    render() {
        return (
            <div>
                {this.props.country.name}
            </div>
        );
    }
}

export default CountryItem;