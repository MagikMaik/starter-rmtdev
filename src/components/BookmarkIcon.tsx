import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { BookmarksContext } from "../contexts/BookmarksContextProvider";

type BookmarkedIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkedIconProps) {
  const { bookmarkedIds, handleBookmark } = useContext(BookmarksContext);
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
