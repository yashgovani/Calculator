import React from 'react';
import PropTypes from 'prop-types';

const history = (props) => (
    <div>  
    {
    props.history.map((expression,i) => {
        return(
            <div key={i}>
                <button onClick={() => props.onSelected(i)}>
                    <div>{expression.expression}&nbsp;=</div>
                    <div>{expression.result}</div>
                </button>
                <button>
                <div onClick={props.onClearHistory}>
                    Clear
                 </div>  
                 </button> 
            </div>
        );
    })
    }
    </div>
);

history.defaultProps = {
    history : [],
    onClearHistory: ()=>alert('clear history'),
    onSelected: () => alert('selected')
};

history.propTypes= {
    history: PropTypes.array,
    onClearHistory: PropTypes.func,
    onSelected: PropTypes.func
}

export default history;