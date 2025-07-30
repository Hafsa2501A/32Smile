// Course data
const courses = [
    {
      title: "Dental Implantology",
      duration: "3–6 months",
      description: "Hands-on training for dental implants including planning and placement techniques."
    },
    {
      title: "Laser Dentistry",
      duration: "2–6 weeks",
      description: "Learn the safe and effective use of lasers in dental treatments."
    },
    {
      title: "Cosmetic Dentistry",
      duration: "1–3 months",
      description: "Master aesthetic procedures such as veneers, teeth whitening, and smile makeovers."
    },
    {
      title: "Forensic Odontology",
      duration: "3–6 months",
      description: "Explore the intersection of dentistry and law through forensic analysis techniques."
    },
    {
      title: "Orthodontic Essentials",
      duration: "6–12 weeks",
      description: "Basic training in orthodontic assessment, appliances, and case selection."
    },
    {
      title: "Endodontics Workshop",
      duration: "4 weeks",
      description: "Hands-on workshop focusing on root canal treatments using modern instruments."
    },
    {
        title: "Digital Dentistry / CAD-CAM",
        duration: "2–4 weeks",
        description: "Use of software in designing dental prosthetics."
      },
      {
        title: " Advanced Oral Radiology",
        duration: "2 months",
        description: "Training in digital X-rays, CBCT, and radiographic interpretation."
      }
  ];
  
  // Dynamically generate course cards
  const container = document.getElementById('coursesContainer');
  
  courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <h2 class="course-title">${course.title}</h2>
      <p class="course-duration">Duration: ${course.duration}</p>
      <p class="course-description">${course.description}</p>
    `;
    container.appendChild(card);
  });

  