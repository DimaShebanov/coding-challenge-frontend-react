import '../App.css';
import React, { useState } from 'react';

function App() {
    const [query, setQuery] = useState('');

    return (
        <div>
            <Form setQuery={setQuery}/>
            {query ? <Content key={query} query={query}/> : null}
        </div>

    );
}

export default App;
