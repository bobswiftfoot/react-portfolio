import React from 'react';
import resume from '../..//files/Resume.pdf'

function Resume()
{
    return (
        <div>
            <iframe src={resume} width="100%" height="1000px"></iframe>
        </div>
    );
}

export default Resume;