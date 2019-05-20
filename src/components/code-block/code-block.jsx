import React from 'react';

const CodeBlock = (props) => { 
    return ( 
    <main className="container p-4 my-4 bg-black">
        <section className="text-left">
            <h3 className="header-quantum">{ props.layout.layerName }</h3>
            <pre>
                { props.layout.keymap }
            </pre>
        </section>
    </main>
    );
};
 
export default CodeBlock;
