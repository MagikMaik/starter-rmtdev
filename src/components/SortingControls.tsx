import { SortBy } from "../lib/types";

type SortingControlprops = {
  onClick: (newSortBy: SortBy) => void;
  sortBy: SortBy;
};

export default function Sorting({ onClick, sortBy }: SortingControlprops) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton
        onClick={() => onClick("relevant")}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingButton>
      <SortingButton
        onClick={() => onClick("recent")}
        isActive={sortBy === "recent"}
      >
        Recent
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
};

function SortingButton({ onClick, isActive, children }: SortingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`sorting__button sorting__button--relevant ${
        isActive ? "sorting__button--active" : ""
      }`}
    >
      {children}
    </button>
  );
}
