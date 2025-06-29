// Sample alumni data(AI generated)
export const sampleAlumni = [
  {
    id: 1,
    first_name: "John",
    last_name: "Smith",
    email: "john.smith@email.com",
    phone: "+1-555-123-4567",
    graduation_year: 2020,
    degree: "Bachelor's",
    branch: "Computer Science",
    current_company: "Google",
    current_position: "Software Engineer",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@email.com",
    phone: "+1-555-234-5678",
    graduation_year: 2019,
    degree: "Master's",
    branch: "Data Science",
    current_company: "Microsoft",
    current_position: "Data Scientist",
    location: "New York, NY"
  },
  {
    id: 3,
    first_name: "Mike",
    last_name: "Johnson",
    email: "mike.johnson@email.com",
    phone: "+1-555-345-6789",
    graduation_year: 2021,
    degree: "Bachelor's",
    branch: "Electrical Engineering",
    current_company: "NVIDIA",
    current_position: "Electric Engineer",
    location: "Austin, TX"
  },
  {
    id: 4,
    first_name: "Sarah",
    last_name: "Williams",
    email: "sarah.williams@email.com",
    phone: "+1-555-456-7890",
    graduation_year: 2018,
    degree: "PhD",
    branch: "Business Administration",
    current_company: "BusinessPro",
    current_position: "Project Manager",
    location: "Chicago, IL"
  },
  {
    id: 5,
    first_name: "David",
    last_name: "Brown",
    email: "david.brown@email.com",
    phone: "+1-555-567-8901",
    graduation_year: 2022,
    degree: "Master's",
    branch: "Marketing",
    current_company: "AdAgency",
    current_position: "Marketing Specialist",
    location: "Los Angeles, CA"
  }
];

export const getNextId = (alumni) => {
  if (alumni.length === 0) return 1;
  return Math.max(...alumni.map(a => a.id)) + 1;
};
