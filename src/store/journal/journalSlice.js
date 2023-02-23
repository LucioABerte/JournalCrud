import { createSlice } from '@reduxjs/toolkit'


export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    savedMessage: "",
    notes: [],
    active: null,
    //    active: null 
    //    id: "ABC123",
    //    title: "",
    //    body: "",
    //    date: 1234567,
    //    imageUrls: [],

  },
  reducers: {
    addNewEmptyNote: (state, action ) => {

    },
    setActiveNote: (state, action) =>  {

    },
    setNotes: (state,action) => {

    },
    setSaving: (state) => {

    },
    updateNote: (state, action) => {

    },
    deleteNoteById: (state,action) => {

    }

  },
})


export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions