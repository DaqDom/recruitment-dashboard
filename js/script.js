// script.js

// Sidebar Toggle for Mobile View
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

// Toggle Sidebar Visibility
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
});

// Step Data (for dynamic generation)
const steps = [
  {
    step: "General Form",
    candidates: [
      { name: "Monika Nowak", location: "Warsaw" },
      { name: "Jack Sparrow", location: "Paris" },
    ],
  },
  {
    step: "Initial Interview",
    candidates: [
      { name: "Mark Murphy", location: "New York" },
      { name: "Michael Johansson", location: "Liverpool" },
    ],
  }, {
    step: "Initial Interview",
    candidates: [
      { name: "Mark Murphy", location: "New York" },
      { name: "Michael Johansson", location: "Liverpool" },
    ],
  }, {
    step: "Initial Interview",
    candidates: [
      { name: "Mark Murphy", location: "New York" },
      { name: "Michael Johansson", location: "Liverpool" },
    ],
  }, {
    step: "Initial Interview",
    candidates: [
      { name: "Mark Murphy", location: "New York" },
      { name: "Michael Johansson", location: "Liverpool" },
    ],
  },
];

// Add Steps Dynamically
const stepsContainer = document.getElementById('steps');
steps.forEach((stepObj, index) => {
  const stepElement = document.createElement('div');
  stepElement.classList.add('bg-gray-100', 'p-4', 'rounded-md');

  const title = document.createElement('h3');
  title.textContent = `Step ${index + 1}: ${stepObj.step}`;
  title.classList.add('font-bold', 'text-lg');
  stepElement.appendChild(title);

  const ul = document.createElement('ul');
  ul.classList.add('mt-4', 'space-y-2');
  stepObj.candidates.forEach((candidate) => {
    const li = document.createElement('li');
    li.textContent = `${candidate.name} - ${candidate.location}`;
    li.classList.add('bg-white', 'shadow-md', 'p-4', 'rounded-md');
    ul.appendChild(li);
  });

  stepElement.appendChild(ul);
  stepsContainer.appendChild(stepElement);
});
