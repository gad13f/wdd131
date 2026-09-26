// 1. Objeto literal del curso con la propiedad sections (arreglo de objetos)
const aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    { section: "001", enrolled: 95, instructor: "Rafael castro" },
    { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
  ]
};

// 2. Función para mostrar el código y el título del curso
function setCourseInformation(course) {
  document.querySelector("#courseName").innerHTML = `${course.code} – ${course.title}`;
}

// 3. Función para renderizar las secciones como filas de una tabla
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

// 4. Ejecución de las funciones pasando el objeto como argumento
setCourseInformation(aCourse);
renderSections(aCourse);