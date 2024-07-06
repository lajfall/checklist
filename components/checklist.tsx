import NewItem from "./new-item";
import ListItem from "./list-item";
import { getItems } from "@/lib/actions";

export default async function Checklist() {
  const items = await getItems();

  if ("error" in items) {
    return <div>{items.error}</div>;
  }

  return (
    <main className="mx-auto w-4/5 min-w-64 max-w-96">
      <NewItem />
      <ul className="mt-4 flex flex-col gap-4">
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
}
