"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { X } from "lucide-react";
import { Item } from "@/lib/types";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { deleteItem, toggleCheck, updateItem } from "@/lib/actions";

export default function ListItem({ item }: { item: Item }) {
  const [text, setText] = useState(item.text);
  const [deleting, setDeleting] = useState(false);
  const [checked, setChecked] = useState(item.checked);

  async function handleToggleCheck() {
    setChecked((prev) => !prev);
    await toggleCheck(item.id, !checked);
  }

  async function handleDelete() {
    setDeleting(true);
    await deleteItem(item.id);
  }

  return (
    <li className="group relative flex items-center gap-4">
      <Checkbox
        defaultChecked={checked}
        className="size-6 rounded-full"
        onCheckedChange={handleToggleCheck}
      />
      <Input
        name="text"
        value={text}
        onBlur={() => updateItem(item.id, text)}
        onChange={(e) => setText(e.target.value)}
        className="focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <X
        onClick={handleDelete}
        className={cn(
          deleting && "invisible",
          "absolute right-2 shrink-0 sm:invisible sm:group-hover:visible",
        )}
      />
    </li>
  );
}
