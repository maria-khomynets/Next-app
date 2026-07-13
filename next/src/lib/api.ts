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

export async function getNotes(categoryId?: string) {
  const responce = await axios.get<NoteListResponse>("/notes", {
    params: { categoryId },
  });
  return responce.data;
}

export async function getSingleNote(id: string) {
  const responce = await axios.get<Note>(`/notes/${id}`);
  return responce.data;
}
export async function getUser(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}
