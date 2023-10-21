import React from "react";
import { IoTrashBin } from "react-icons/io5";
import { MdUnarchive, MdArchive } from "react-icons/md";

const NoteItemAction = ({ onDeleteNote, onArchiveNote, id, archived }) => {
  return (
    <div className="note-item__action">
      <button
        id={id}
        onClick={() => onDeleteNote(id)}
        aria-label="Delete "
        className="note-item__delete-button"
      >
        <IoTrashBin />
      </button>
      <button
        id={id}
        onClick={() => onArchiveNote(id)}
        aria-label="Archive "
        className="note-item__archive-button"
      >
        {archived ? <MdUnarchive /> : <MdArchive />}
      </button>
    </div>
  );
};

export default NoteItemAction;
