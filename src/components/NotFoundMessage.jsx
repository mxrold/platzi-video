import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/NotFoundMessage.scss';



const NotFoundMessage = () => (
    <section class="error">
        <h2 class="animated pulse">404</h2>
        <p>Page Not Found</p>
        <Link to="#">Back Home</Link>
    </section>
);

export default NotFoundMessage;