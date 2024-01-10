export function Stats({ items }) {
  const numItems = items.length;
  const numDone = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      You have {numItems} task(s), and have completed {numDone} of them. (
      {numItems === 0
        ? "100%"
        : Number(numDone / numItems).toLocaleString(undefined, {
            style: "percent",
            minimumFractionDigits: 2,
          })}
      )
    </footer>
  );
}
