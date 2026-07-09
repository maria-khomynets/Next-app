import axios from "axios";

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};
export type NoteListResponse = {
  notes: Note[];
  total: number;
};
axios.defaults.baseURL = "https://next-v1-notes-api.goit.study";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export async function getNotes() {
  await delay(2000);
  const responce = await axios.get<NoteListResponse>("/notes");
  return responce.data;
}

export async function getSingleNote(id: string) {
  const responce = await axios.get<Note>(`/notes/${id}`);
  return responce.data;
}
