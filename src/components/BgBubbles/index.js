import React from 'react';

import './index.scss';

const BgBubbles = () => {

    return (
        <div className={`main`} style={{ background: `linear-gradient(to bottom right, #0043A9 0%, #B42B2C 100%)` }}>
            <BgBubbles.Bubbles />
        </div>
    );
};

BgBubbles.Bubbles = () => {
    return range(1, 30).map(
        n => <div key={n} className={`bubble bubble-${n}`} />
    )
}

function range(start, end) {
    const ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

export default BgBubbles;
