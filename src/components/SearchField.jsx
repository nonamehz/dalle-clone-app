import { InputField } from './';


export const SearchField = ({ searchTerm, onInputChange }) => {

    return (
        <form className="flex flex-col gap-3 my-10 text-sm">
            <InputField
                labelText="Search Post"
                placeholder="Search Post"
                type="text"
                name="searchTerm"
                value={searchTerm}
                onChange={onInputChange}
            />
        </form>
    )
}