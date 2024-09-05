type totalJobItemsProps = {
  totalJobItems: number;
};

export default function ResultsCount({ totalJobItems }: totalJobItemsProps) {
  return (
    <p className="count">
      <span className="u-bold">{totalJobItems} Total items</span>
    </p>
  );
}
