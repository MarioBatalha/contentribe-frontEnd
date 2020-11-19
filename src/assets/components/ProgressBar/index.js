import React from 'react';
import './style.css';

export default function Progress() {
    return (
        <div className="progress">
            <div className="progress-done" data-done="26"><br />
                 <progress value="30" max="100" />
            </div>

        </div>
    )
}