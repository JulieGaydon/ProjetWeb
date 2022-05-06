import React from 'react';

function Post({
    pseudo,
    text,
    // image,
    // avatar
}){
    return <div className='post'>
        <div className='header'>
            <div className='text'>
                <h3>
                    {pseudo}
                </h3>
            </div>
            <div className='post text'>
                <p>{text}</p>
            </div>
        </div>
    </div>
}

export default Post;