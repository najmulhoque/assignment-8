import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Cards = ({ handleBookMark, handleSpendTime }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            {
                data.map(item => <SingleCart handleSpendTime={handleSpendTime} handleBookMark={handleBookMark} item={item} key={item.id}></SingleCart>)
            }
        </div>
    );
};

export default Cards;