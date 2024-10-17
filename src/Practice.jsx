export const Practice = () => {
  const students = [5, 69];
  return (
    <>
      {/* <p>{students.length && "NO student found"}</p> */}
      {/* 1St */}
      {/* <p>{students.length === 0 && "No student found"}</p> */}

      {/* 2nd */}
      {/* <p>{!students.length && "No student found"}</p> */}

      {/* 3rd */}
      <p>{Boolean(!students.length) && "No student found"}</p>

      <p>Number of students:- {students.length}</p>
    </>
  );
};
