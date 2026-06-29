interface SortControlProps {
    updateSort: (value: string) => void;
}
export const SortControl = ({ updateSort }: SortControlProps) => {
    const sortOptions = ["New", "Old"];
    return (
        <div className="sort-filter">
            <label>Sort By:</label>
            <select onChange={(e) => updateSort(e.target.value)}>
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