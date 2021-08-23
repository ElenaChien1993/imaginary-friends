import React, { Component } from 'react';

const Card = ({ id, name, email }) => {
    // ES6 的解構賦值
    // const { id, name, email } = props;
    return (
        <div className='tc bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?set=set5&size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;