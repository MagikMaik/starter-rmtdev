import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarksContext } from "../lib/hooks";


type BookmarkedIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkedIconProps) {
  const { bookmarkedIds, handleBookmark } = useBookmarksContext();
  return (
    <button
      onClick={(e) => {
        handleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon
        className={`${bookmarkedIds.includes(id) ? "filled" : ""}`}
      />
    </button>
  );
}
