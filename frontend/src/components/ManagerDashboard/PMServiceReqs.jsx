import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function PMServiceReqs() {
  const taskss = [
    { id: "1", content: "Request 1" },
    { id: "2", content: "Request 2" },
    { id: "3", content: "Request 3" },
    { id: "4", content: "Request 4" },
    { id: "5", content: "Request 5" }
  ];

  const tasks = [
  {
    id: "d5e3",
    requestSubject: "New Req",
    requestType: "New Req type",
    requestMessage: "New Req type Message New Req type Message"
  },
  {
    id: "caee",
    requestSubject: "Test 1",
    requestType: "Test 1 type",
    requestMessage: "Test 1 message Test 1 messageTest 1 messageTest 1 message"
  },
  {
    id: "2fdd",
    requestSubject: "Testst",
    requestType: "Testst",
    requestMessage: "TeststTeststTeststTestst"
  }]

  const taskStatus = {
    requests: {
      name: "Requests",
      items: tasks
    },
    toDo: {
      name: "In progress",
      items: []
    },
    done: {
      name: "Done",
      items: []
    }
  };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

  const [columns, setColumns] = useState(taskStatus);
  

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-10 text-center">Service Request</h1>
      <div className="flex justify-start h-full">
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div className="flex flex-col" key={index}>
                <h2 className="pl-3 font-bold">{column.name}</h2>
                <div className="m-2 bg-gray-300 h-[460px] w-60 rounded-md overflow-auto">
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`p-4  w-250 min-h-500 ${snapshot.isDraggingOver ? 'bg-lightblue' : 'bg-lightgrey'}`}
                      >
                        {column.items.map((item, index) => {
                          return ((
                            <Draggable key={item.id} draggableId={item.id} index={index} >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`select-none p-4 mb-2 min-h-50 ${snapshot.isDragging ? 'bg-white' : 'bg-white'} rounded-md ${provided.draggableProps.style}`}
                                >
                                  <div className=''>
                                    <h6 className='text-[18px]'>{item.requestSubject}</h6>
    
                                    <p className='text-[14px] text-gray-400'>{item.requestMessage}</p>
    
                                    <p className='text-[12px] mt-8 rounded-full px-6 py-1 inline-block text-white bg-blue-500'>{item.requestType}</p>
                                  </div> 
                                </div>
                              )}
                            </Draggable>
                          ))
                        }
                        )}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              </div>
            )
          }  )}
        </DragDropContext>
      </div>
    </div>
  );
}
