import React from 'react';

const ConnectedList = ( {articles} ) => (
    <div>
        <h2>Article List</h2>
        <ul>
            {articles.map(article => (
                <li key = {article.id}>{article}</li>
            ))}
        </ul>
    </div>
)

export default ConnectedList;