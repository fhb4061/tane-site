type TimelineItem = {
  title: string;
  subtitle: string;
  details: string[];
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="grid gap-5">
      {items.map((item) => (
        <section key={item.title}>
          <h3 className="text-lg lg:text-xl font-bold">{item.title}</h3>
          <div className="text-faded-fg">
            <p>{item.subtitle}</p>
          </div>
          <ul className="grid gap-5">
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
