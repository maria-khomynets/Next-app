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
export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};
export type NewNoteData = {
  title: string;
  content: string;
  categoryId: string;
};
axios.defaults.baseURL = "https://next-v1-notes-api.goit.study";
export const createNote = async (data: NewNoteData) => {
  const res = await axios.post<Note>("/notes", data);
  return res.data;
};
export const getCategories = async () => {
  const res = await axios<Category[]>("/categories");
  return res.data;
};

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
