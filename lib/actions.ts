"use server";

import db from "./db";
import { revalidatePath } from "next/cache";

export async function getItems() {
  try {
    const items = await db.item.findMany({
      orderBy: { createdAt: "asc" },
    });
    return items;
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to get items",
    };
  }
}

export async function addItem(text: string) {
  try {
    const item = await db.item.create({
      data: { text },
    });
    revalidatePath("/");
    return item;
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to add item",
    };
  }
}

export async function updateItem(id: string, text: string) {
  try {
    const item = await db.item.update({
      where: { id },
      data: { text },
    });
    return item;
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to update item",
    };
  }
}

export async function toggleCheck(id: string, checked: boolean) {
  try {
    const item = await db.item.update({
      where: { id },
      data: { checked },
    });
    return item;
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to toggle check",
    };
  }
}

export async function deleteItem(id: string) {
  try {
    const item = await db.item.delete({
      where: { id },
    });
    revalidatePath("/");
    return item;
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to delete item",
    };
  }
}
