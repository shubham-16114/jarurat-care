import { useCallback, useState } from "react";

export default function usePatients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateMedicalData = (r, idx) => {
    const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    const conditions = [
      "Hypertension",
      "Type 2 Diabetes",
      "Asthma",
      "Arthritis",
      "None",
      "Migraine",
      "Thyroid",
    ];
    const medications = [
      ["Amlodipine 5mg", "Metformin 500mg"],
      ["Aspirin 75mg"],
      ["Salbutamol Inhaler"],
      ["None"],
      ["Paracetamol 500mg"],
      ["Azithromycin 500mg"],
    ];
    const allergies = [
      "None",
      "Penicillin",
      "Peanuts",
      "Dust",
      "None",
      "Seafood",
    ];
    const statuses = ["Stable", "Critical", "Under Observation", "Recovering"];
    const indianDoctors = [
      "Dr. Sharma",
      "Dr. Patel",
      "Dr. Kumar",
      "Dr. Singh",
      "Dr. Reddy",
      "Dr. Desai",
    ];
    const indianCities = [
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Lucknow",
    ];
    const indianStates = [
      "Maharashtra",
      "Delhi",
      "Karnataka",
      "Telangana",
      "Tamil Nadu",
      "West Bengal",
      "Maharashtra",
      "Gujarat",
      "Rajasthan",
      "Uttar Pradesh",
    ];

    const randomCondition = conditions[idx % conditions.length];
    const randomMeds = medications[idx % medications.length];
    const randomAllergy = allergies[idx % allergies.length];
    const randomStatus = statuses[idx % statuses.length];
    const randomBlood = bloodTypes[idx % bloodTypes.length];
    const randomDoctor = indianDoctors[idx % indianDoctors.length];
    const randomCity = indianCities[idx % indianCities.length];
    const randomState = indianStates[idx % indianStates.length];

    return {
      id: r.login.uuid || `patient-${idx}`,
      name: { first: r.name.first, last: r.name.last },
      age: r.dob.age,
      gender: r.gender === "male" ? "Male" : "Female",
      contact: `+91 ${Math.floor(7000000000 + Math.random() * 2999999999)}`,
      email: r.email,
      avatar: r.picture.large,
      thumbnail: r.picture.thumbnail,
      registeredDate: new Date(
        Date.now() - Math.floor(Math.random() * 365) * 24 * 60 * 60 * 1000
      ).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      address: {
        street: `${r.location.street.number} ${r.location.street.name}`,
        city: randomCity,
        state: randomState,
        zip: `${Math.floor(100000 + Math.random() * 799999)}`,
      },
      medicalInfo: {
        bloodType: randomBlood,
        height: `${Math.floor(150 + Math.random() * 40)} cm`,
        weight: `${Math.floor(50 + Math.random() * 50)} kg`,
        conditions: randomCondition,
        medications: randomMeds,
        allergies: randomAllergy,
        lastVisit: new Date(
          Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000
        ).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
        nextAppointment: new Date(
          Date.now() + Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
        ).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
        status: randomStatus,
        emergencyContact: {
          name: `${r.name.first}'s Family`,
          phone: `+91 ${Math.floor(7000000000 + Math.random() * 2999999999)}`,
          relation: idx % 2 === 0 ? "Spouse" : "Parent",
        },
      },
      vitalSigns: {
        bloodPressure: `${Math.floor(110 + Math.random() * 30)}/${Math.floor(
          70 + Math.random() * 20
        )}`,
        heartRate: Math.floor(60 + Math.random() * 40),
        temperature: (36 + Math.random() * 2).toFixed(1),
        oxygenLevel: Math.floor(95 + Math.random() * 5),
      },
      medicalRecords: [
        {
          date: new Date(
            Date.now() - 15 * 24 * 60 * 60 * 1000
          ).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
          type: "Lab Report",
          description: "Blood Test - Complete Blood Count",
          doctor: randomDoctor,
        },
        {
          date: new Date(
            Date.now() - 30 * 24 * 60 * 60 * 1000
          ).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
          type: "X-Ray",
          description: "Chest X-Ray - Routine Checkup",
          doctor: randomDoctor,
        },
        {
          date: new Date(
            Date.now() - 60 * 24 * 60 * 60 * 1000
          ).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
          type: "Prescription",
          description: "Updated medication dosage",
          doctor: randomDoctor,
        },
      ],
      insurance: {
        provider: [
          "Star Health",
          "Max Bupa",
          "ICICI Lombard",
          "Bajaj Allianz",
          "HDFC Ergo",
        ][idx % 5],
        policyNumber: `POL-${Math.floor(100000 + Math.random() * 900000)}`,
        validUntil: new Date(
          Date.now() + 365 * 24 * 60 * 60 * 1000
        ).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
      },
    };
  };

  const fetchPatients = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      // Fetch Indian users for realistic Indian names and photos
      const res = await fetch("https://randomuser.me/api/?results=12&nat=in");
      if (!res.ok) throw new Error("Network error");
      const { results } = await res.json();
      const mapped = results.map((r, idx) => generateMedicalData(r, idx));
      setPatients(mapped);
    } catch (e) {
      try {
        const res2 = await fetch("/patients.json");
        const data = await res2.json();
        setPatients(data);
      } catch (e2) {
        setError("Failed to load patients.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const addPatient = useCallback((p) => {
    setPatients((prev) => [p, ...prev]);
  }, []);

  return { patients, loading, error, fetchPatients, addPatient };
}
