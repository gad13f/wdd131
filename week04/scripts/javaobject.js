// Objeto of  sections
const aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    { section: "001", enrolled: 95, instructor: "Rafael castro" },
    { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
  ]
};

//  Function to display course code and title
function setCourseInformation(course) {
  document.querySelector("#courseName").innerHTML = `${course.code} – ${course.title}`;
}

//  Functions to render the sections in table
function renderSections(course) {
  const tbody = document.querySelector("#sections tbody");
  let rows = "";
  
  for (const section of course.sections) {
    rows += `<tr>
      <td>${section.section}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`;
  }
  
  tbody.innerHTML = rows;
}

//  Execution of the functions passing the object as an argument
setCourseInformation(aCourse);
renderSections(aCourse);