interface FilterControlProps {
    updateSearchTerm: (value: string) => void;
}
export const FilterControl = ({ updateSearchTerm }: FilterControlProps) => {
    return (
        <div>
            <label>Filter By Title:</label>
            <input type="text" onChange={(e) => updateSearchTerm(e.target.value)} />
        </div>
    )
}