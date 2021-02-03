import React from 'react';

import '../assets/styles/components/Categories.scss';


const Categories = (props) => (
    <div className="Categories">
        <h3 className="categories__title">{props.title}</h3>
        {props.children}
    </div>
);

export default Categories;