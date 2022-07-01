import { useMemo } from "react";

const people = [
  {
    id: 0,
    name: "Gigi",
    age: "28",
  },
  {
    id: 1,
    name: "Marta",
    age: "13",
  },
  {
    id: 2,
    name: "Tony",
    age: "7",
  },
  {
    id: 3,
    name: "Lucia",
    age: "37",
  },
  {
    id: 4,
    name: "Sara",
    age: "43",
  },
];

export function FilteredList() {
  const adults = useMemo(
    () =>
      people.map(
        (people, index) =>
          people.age >= 18 && (
            <li key={(people, index)}>
              {(people.name) + " " + (people.age)}
            </li>
          )
      ),
    []
  );

  return (
    <div>
      <h1>Adults:</h1>
      <ul>{adults}</ul>
    </div>
  );
}
