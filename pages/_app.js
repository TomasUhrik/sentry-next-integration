import React from 'react';
import * as Sentry from '@sentry/browser';

Sentry.init({ dsn: 'https://5c1e922aeef74b029c0bf40d421f2aa7@sentry.io/1544682' });

const App = (props) => {
    const { Component, pageProps } = props;

    return (
        <div>
            Hello App
            <Component {...pageProps} />
        </div>
    );
};

export default App;