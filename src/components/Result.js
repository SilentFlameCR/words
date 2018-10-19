import React from 'react';

class Result extends React.Component {
    
    render() {
        
        return(
            <div className="result">
                <div className="row">
                    <div className="col col-12">
                       
                        { 
                            this.props.input && 
                            <p>The following letters were left out to make this longest word: <span>{this.props.input}</span></p>
                        
                        }
                    </div>
                    <div className="col col-12">
                        {
                            this.props.longestWord &&
                            <p className="long">{this.props.longestWord}</p>
                        }
                    </div>
                    <div className="col col-12 offset-md-1 col-md-10">
                        {
                            this.props.definition &&
                            <p className="answer">{this.props.definition}</p>
                        }
                    </div>
                    <div className="col col-12 offset-md-1 col-md-10">
                        {
                            this.props.author &&
                            <p className="answer"> --  {this.props.author}</p>
                        }
                    </div>
                    
                        
                    
                </div>
            </div> 
        );
    }
}

export default Result;