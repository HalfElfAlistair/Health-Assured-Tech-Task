import { SortControl } from "./SortControl";
interface SortFilterControlsProps {
    updateSort: (value: string) => void;
}
export const SortFilterControls = ({ updateSort }: SortFilterControlsProps) => {
    return (
        <section>
            <SortControl updateSort={updateSort} />
        </section>
    )
}