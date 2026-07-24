import UnitCard
  from "../components/engineering/UnitCard";


const units = [

  {
    id: "ds-unit-1",
    unitNumber: 1,
    title: "Introduction to Data Structures",
    description:
      "Learn the basics of data structures, algorithms and complexity analysis.",
    topicsCount: 6,
  },

  {
    id: "ds-unit-2",
    unitNumber: 2,
    title: "Stacks and Queues",
    description:
      "Understand stack and queue data structures with their applications.",
    topicsCount: 5,
  },

  {
    id: "ds-unit-3",
    unitNumber: 3,
    title: "Linked Lists",
    description:
      "Learn singly, doubly and circular linked lists.",
    topicsCount: 7,
  },

  {
    id: "ds-unit-4",
    unitNumber: 4,
    title: "Trees",
    description:
      "Study binary trees, BST, AVL trees and tree traversals.",
    topicsCount: 8,
  },

  {
    id: "ds-unit-5",
    unitNumber: 5,
    title: "Graphs",
    description:
      "Learn graph representation, traversal and shortest path algorithms.",
    topicsCount: 7,
  },

];


function SubjectDetails() {

  return (

    <main
      className="
        min-h-screen
        bg-slate-950
        py-12
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >

        {/* Page Title */}

        <h1
          className="
            text-3xl
            sm:text-4xl
            font-bold
            text-white
            mb-3
          "
        >

          💻 Data Structures

        </h1>


        <p
          className="
            text-gray-400
            mb-8
          "
        >

          Explore all units and study materials.

        </p>


        {/* Units Grid */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {units.map((unit) => (

            <UnitCard
              key={unit.id}
              {...unit}
            />

          ))}

        </div>

      </div>

    </main>

  );

}


export default SubjectDetails;
