import React from 'react';

class Input extends React.Component {
    render() {
        return(
            <div className="input">
                
                    
                <form onSubmit={this.props.submit}>
                   
                    <div className="row">
                       
                        <div className="col col-12  offset-md-3 col-md-6">
                            <input id="actual-input" type="text" name="words" placeholder="type the letters you don't want here with no spaces eg. abcd"></input>
                        </div>
                        <div className="col col-12 offset-md-3 col-md-6">
                            <button>Longest word me!</button>
                        </div>
                        
                    </div>
                    
                </form>
                    
                
            </div> 
        );
    }
}

export default Input;