import { useEffect, useState } from 'react';


export function Github() {
 
    const API_Github = 'https://api.github.com/users/rudiukhanna/repos';
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(API_Github)
        .then(response => response.json())
        .then(data => setRepos(data))
        .catch(error => console.log(error));
    }, []);

    return (
        <div className='repos'>
            <h2 className='title'>My GitHub repositories</h2>
            <div className='container'>
                {repos.length > 0 ? (
                    <ul> 
                        {repos.map(repo => (
                            <li className='repo' key={repo.id}>
                                <a href={repo.html_url} 
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    {repo.name}
                                   </a>
                            </li>
                        ))}
                        </ul>
                ) : (
                    <p>No repositories found.</p>
                )}
            </div>
        </div>
    );
}