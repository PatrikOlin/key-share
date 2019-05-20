import React from 'react';

const ImageBox = (props) => {
    return ( 
        <section className="w-3/4 mr-4">
            <img src={ props.url }></img>
        </section>
     );
};
 
export default ImageBox;
