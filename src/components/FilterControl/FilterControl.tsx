interface FilterControlProps {
    updateSearchTerm: (value: string) => void;
}
export const FilterControl = ({ updateSearchTerm }: FilterControlProps) => {
    return (
        <div className="sort-filter">
            <label htmlFor="filter-input">Filter By Title:</label>
            <input
                id="filter-input"
                type="text"
                onChange={(e) => updateSearchTerm(e.target.value)}
                placeholder="Search title..."
                data-testid="filter-control"
            />
        </div>
    )
}