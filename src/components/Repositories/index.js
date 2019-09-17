import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as RepositoryActions from '../../store/actions/repository';

export default function Repository() {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    const repositories = useSelector(
        state => state.repositoryReducer.repositories
    );

    const setRepositories = (repositories) => dispatch(
        RepositoryActions.setRepositories(repositories)
    )

    const fetchData = async () => {
        const response = await fetch('https://api.github.com/users/vagnerbc/repos');
        const data = await response.json();

        setRepositories(data);
    };
  
    return (
        <>
            <strong>Exemplo de react Hook com redux</strong>
            <ul>
                {repositories.map(repo => 
                    <li key={repo.id}>
                        {repo.name}
                    </li>
                )}
            </ul>
        </>
    )
}
