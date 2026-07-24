import SubjectCard from "../components/engineering/SubjectCard";
import SubjectCard from "../components/engineering/SubjectCard";


const subjects = [
  {
    id: "data-structures",
    name: "Data Structures",
    code: "23CS201",
    semester: "III",
    description:
      "Learn fundamental data structures and algorithms.",
    units: 5,
    icon: "💻",
  },

  {
    id: "java-programming",
    name: "Object Oriented Programming",
    code: "23CS202",
    semester: "III",
    description:
      "Learn Java programming and object-oriented concepts.",
    units: 5,
    icon: "☕",
  },

  {
    id: "database-management",
    name: "Database Management Systems",
    code: "23CS203",
    semester: "III",
    description:
      "Learn SQL, relational databases and database design.",
    units: 5,
    icon: "🗄️",
  },
];


function Engineering() {

  return (
    <main>

      <h1>📚 Engineering Hub</h1>

      <div>
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            {...subject}
          />
        ))}
      </div>

    </main>
  );
}


export default Engineering;

<SubjectCard

  id="data-structures"

  name="Data Structures"

  code="23CS201"

  semester="III"

  description="Learn arrays, linked lists, stacks, queues, trees and graphs."

  units={5}

  icon="💻"

/>
