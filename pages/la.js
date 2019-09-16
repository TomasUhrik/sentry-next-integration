import React from 'react';

const La = () => {
    const laFunc = () => {
        velicePodivnaFunkce();
    };

    return (
        <div>
            Hello LA
            <button onClick={() => laFunc()}>lick me</button>
        </div>
    );
};

export default La;