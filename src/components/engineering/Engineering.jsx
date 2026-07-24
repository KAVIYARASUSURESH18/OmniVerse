import SubjectCard from "../components/engineering/SubjectCard";
import SubjectCard from "../components/engineering/SubjectCard";
const semesters = [

  {
    id: "1",
    semester: "I",
    title: "First Semester",
    description:
      "Explore the fundamental subjects and core concepts of engineering.",
    subjectsCount: 8,
    icon: "📘",
  },

  {
    id: "2",
    semester: "II",
    title: "Second Semester",
    description:
      "Build your engineering foundation with mathematics, science and programming.",
    subjectsCount: 8,
    icon: "📗",
  },

  {
    id: "3",
    semester: "III",
    title: "Third Semester",
    description:
      "Learn advanced computer science and engineering concepts.",
    subjectsCount: 7,
    icon: "💻",
  },

  {
    id: "4",
    semester: "IV",
    title: "Fourth Semester",
    description:
      "Explore advanced programming, systems and database technologies.",
    subjectsCount: 7,
    icon: "🖥️",
  },

  {
    id: "5",
    semester: "V",
    title: "Fifth Semester",
    description:
      "Develop expertise in advanced computer science subjects.",
    subjectsCount: 6,
    icon: "⚙️",
  },

  {
    id: "6",
    semester: "VI",
    title: "Sixth Semester",
    description:
      "Focus on advanced technologies and practical engineering skills.",
    subjectsCount: 6,
    icon: "🚀",
  },

  {
    id: "7",
    semester: "VII",
    title: "Seventh Semester",
    description:
      "Prepare for industry and professional engineering challenges.",
    subjectsCount: 5,
    icon: "🏆",
  },

  {
    id: "8",
    semester: "VIII",
    title: "Eighth Semester",
    description:
      "Complete your engineering journey with projects and advanced learning.",
    subjectsCount: 5,
    icon: "🎓",
  },

];

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
