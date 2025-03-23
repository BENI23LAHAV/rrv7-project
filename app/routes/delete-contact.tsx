import type { Route } from "../+types/root";
import { deleteContact } from "../data";
import { redirect } from "react-router";
export async function action({ params }: Route.ActionArgs) {
  const ID = await params.contactId;
  if (ID) {
    await deleteContact(ID);
    console.log(ID, " Deleted succefuly");
  }
  return redirect("/");
}
