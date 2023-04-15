import { useState } from 'react';


export const useSearch = (initialValue, dataToFilter = []) => {

    const [searchTerm, setSearchTerm] = useState(initialValue);
    const [searchResult, setSearchResult] = useState(null);
    const [searchTimeout, setSearchTimeout] = useState(null);

    const onInputSearchChange = ({ target }) => {

        //limpiar el timeout
        clearTimeout(searchTimeout);

        setSearchTerm(target.value);

        //iniciar el timeout
        setSearchTimeout(

            setTimeout(() => {

                const searchResult = dataToFilter.filter(item =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.prompt.toLowerCase().includes(searchTerm.toLowerCase())
                );

                setSearchResult(searchResult);

            }, 500)

        );

    }

    return {
        searchTerm,
        searchResult,
        onInputSearchChange,
    };

}