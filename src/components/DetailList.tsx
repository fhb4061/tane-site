type DetailListItem = {
  term: string;
  description: string;
};

type DetailListProps = {
  items: DetailListItem[];
};

export function DetailList({ items }: DetailListProps) {
  return (
    <dl className="grid gap-1">
      {items.map((item) => (
        <div key={item.term}>
          <dt className="font-bold">{item.term}</dt>
          <dd className="text-faded-fg">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}
