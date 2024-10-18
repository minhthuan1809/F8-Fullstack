/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { getTask } from "../service/gettask";

function DraggableItem({ id, content }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : "none",
  };

  return (
    <div
      contentEditable={true}
      suppressContentEditableWarning={true}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      x
      className="bg-white border border-gray-300 p-2 mb-2 rounded shadow"
    >
      {content}
    </div>
  );
}

function DroppableArea({ id, items }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const bgColor = isOver ? "bg-green-100" : "bg-gray-100";

  return (
    <div ref={setNodeRef} className={`p-4 rounded-md w-80 mr-4 ${bgColor}`}>
      <h4 className="text-lg font-semibold mb-2">{id}</h4>
      {items.map((item) => (
        <DraggableItem key={item._id} id={item._id} content={item.content} />
      ))}
    </div>
  );
}

export default function Trello() {
  const dispatch = useDispatch();
  const dataApiKey = useSelector((state) => state.login.apikey);
  const [columns, setColumns] = useState({});

  useEffect(() => {
    async function handleRender() {
      const response = await getTask(dataApiKey);
      if (response.code === 200) {
        const groupedTasks = response.data.tasks.reduce((acc, task) => {
          const { column } = task;
          if (!acc[column]) {
            acc[column] = [];
          }
          console.log(response);
          acc[column].push(task);
          return acc;
        }, {});
        setColumns(groupedTasks);
      } else {
        dispatch({ type: "logout" });
        return;
      }
    }
    handleRender();
  }, [dataApiKey, dispatch]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeColumn = columns[active.data.current.column];
    const newColumn = over.id;

    const updatedColumns = { ...columns };

    const movedItem = activeColumn.find((item) => item._id === active.id);
    const remainingItems = activeColumn.filter(
      (item) => item._id !== active.id
    );

    if (!updatedColumns[newColumn]) {
      updatedColumns[newColumn] = [];
    }
    updatedColumns[newColumn].push(movedItem);

    setColumns(updatedColumns);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex">
        {Object.keys(columns).map((columnKey) => (
          <DroppableArea
            key={columnKey}
            id={columnKey}
            items={columns[columnKey]}
          />
        ))}
      </div>
    </DndContext>
  );
}
