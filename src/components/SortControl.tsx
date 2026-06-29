interface SortControlProps {
    updateSort: (value: string) => void;
}
export const SortControl = ({ updateSort }: SortControlProps) => {
    const sortOptions = ["New", "Old"];
    return (
        <div>
            <label>Sort By:</label>
            <select onChange={(e) => updateSort(e.target.value)}>
                {sortOptions.map(sortOption => {
                    return (
                        <option key={sortOption} value={sortOption}>
                            Date Uploaded - {sortOption}est First
                        </option>
                    )
                })}
            </select>
        </div>
    )
}