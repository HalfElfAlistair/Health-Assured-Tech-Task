interface SortControlProps {
    updateSort: (value: string) => void;
}
export const SortControl = ({ updateSort }: SortControlProps) => {
    const sortOptions = ["New", "Old"];
    return (
        <div className="sort-filter">
            <label htmlFor="sort-input">Sort By:</label>
            <select
                id="sort-input"
                onChange={(e) => updateSort(e.target.value)}
                data-testid="sort-control"
            >
                {sortOptions.map(sortOption => {
                    return (
                        <option key={sortOption} value={sortOption}>
                            Upload Date - {sortOption}est First
                        </option>
                    )
                })}
            </select>
        </div>
    )
}