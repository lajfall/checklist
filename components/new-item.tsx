"use client";

import { useRef } from "react";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";
import { addItem } from "@/lib/actions";

export default function NewItem() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    const text = formData.get("text") as string;
    if (text.trim() === "") {
      return;
    }

    await addItem(text);
    formRef.current?.reset();
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="flex items-center gap-4"
    >
      <button type="submit">
        <Plus className="shrink-0" />
      </button>
      <Input
        name="text"
        placeholder="Add item..."
        className="focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </form>
  );
}
