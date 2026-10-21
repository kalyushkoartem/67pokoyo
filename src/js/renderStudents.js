export function renderStudents(students) {
    const createMarkup = students.map(({ id, name, age, course, skills, email, isEnrolled }) => {
        return `<tr id="${id}">
  <th>${id}</th>
  <th class="name">${name}</th>
  <th class="age">${age}</th>
  <th class="course">${course}</th>
  <th class="skills">${skills}</th>
  <th class="email">${email}</th>
  <th class="is-enrolled">${isEnrolled ? "Student" : "Isn't student"}</th>
  <th><button class="delete" data-action = "delete" type="button">delete</button>
    <button class="update" data-action = "update" type="button">update</button></th>
</tr>
`;
    }).join("")
    return createMarkup
}
