import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <div className="row">
                    <div className="col col-12">
                        <h1>Generate the longest word!</h1>
                        <h3>Excluding letters you don't want</h3>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Header;