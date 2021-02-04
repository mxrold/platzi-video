import React from 'react';

import '../assets/styles/components/NotFoundMessage.scss';



const NotFoundMessage = () => (
    <section class="error">
        <h2 class="animated pulse">404</h2>
        <p>Page Not Found</p>
        <a href="#">Back Home</a>
    </section>
);

export default NotFoundMessage;