import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/NotFoundMessage.scss';



const NotFoundMessage = () => (
    <section className="error">
        <h2 className="animated pulse">404</h2>
        <p>Page Not Found</p>
        <Link to="#">Back Home</Link>
    </section>
);

export default NotFoundMessage;