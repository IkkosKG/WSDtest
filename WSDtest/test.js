// Fetch course data from the JSON file
async function fetchCourses() {
  const response = await fetch('courses.json');
  const courses = await response.json();
  return courses;
}

// Render the course data to HTML
function displayCourses(courses) {
  const courseList = document.getElementById('course-list');
  courseList.innerHTML = ''; // Clear previous list

  courses.forEach(course => {
    const courseItem = document.createElement('div');
    courseItem.className = 'course-item';
    courseItem.innerHTML = `
      <h3>${course.courseName}</h3>
      <p>Instructor: ${course.instructor}</p>
      <p>Duration: ${course.duration}</p>
      <p>Category: ${course.category}</p>
    `;
    courseList.appendChild(courseItem);
  });
}

// Implement filter functionality
function filterCourses(courses) {
  const filterCategory = document.getElementById('filter-category').value;
  if (filterCategory === 'all') {
    return courses;
  } else {
    return courses.filter(course => course.category === filterCategory);
  }
}

// Implement sorting functionality
function sortCourses(courses) {
  const sortBy = document.getElementById('sort-by').value;
  return courses.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
}

// Handle pagination (simple example)
function paginateCourses(courses, page = 1, perPage = 2) {
  const start = (page - 1) * perPage;
  const end = page * perPage;
  return courses.slice(start, end);
}

// Initialize the app
async function init() {
  let courses = await fetchCourses();

  // Filter and Sort Event Listeners
  document.getElementById('filter-category').addEventListener('change', () => {
    courses = filterCourses(courses);
    displayCourses(courses);
  });

  document.getElementById('sort-by').addEventListener('change', () => {
    courses = sortCourses(courses);
    displayCourses(courses);
  });

  // Initial Display of Courses
  displayCourses(courses);
}

init();
