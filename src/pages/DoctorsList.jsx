import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiBell, FiSearch, FiSliders } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import BottomNav from "./Home/BottomNav";
import hedoc from "../assets/hedoc.jpg";
import shedoc from "../assets/shedoc.png";
import { useNavigate } from "react-router-dom";
const doctors = [
  {
    id: 1,
    name: "Dr. Roboto Kale",
    speciality: "Cardiologist",
    hospital: "UN Mehta Hospital",
    state: "Gujarat",
    time: "10:40 - 2:40 AM",
    price: "700",
    exp: "14 Yrs",
    rating: 4.8,
    avatar: hedoc,
  },
  {
    id: 2,
    name: "Dr. Lily Rozar",
    speciality: "Cardiologist",
    hospital: "Apollo Hospital",
    state: "Delhi",
    time: "10:40 - 2:40 AM",
    price: "1000",
    exp: "10 Yrs",
    rating: 4.8,
    avatar: hedoc,
  },
  {
    id: 3,
    name: "Dr. Merry Koen",
    speciality: "Cardiologist",
    hospital: "VS Hospital",
    state: "Maharashtra",
    time: "10:40 - 2:40 AM",
    price: "1500",
    exp: "10 Yrs",
    rating: 4.8,
    avatar: hedoc,
  },

  // -----------------------
  //      30 MORE DOCTORS
  // -----------------------

  {
    id: 4,
    name: "Dr. Sunil Deshmukh",
    speciality: "Cardiologist",
    hospital: "Fortis Hospital",
    state: "Maharashtra",
    time: "11:00 - 3:00 PM",
    price: "800",
    exp: "12 Yrs",
    rating: 4.7,
    avatar: hedoc,
  },
  {
    id: 5,
    name: "Dr. Riya Kapoor",
    speciality: "Cardiologist",
    hospital: "Max Super Specialty",
    state: "Delhi",
    time: "9:00 - 1:00 PM",
    price: "1200",
    exp: "9 Yrs",
    rating: 4.6,
    avatar:shedoc,
  },
  {
    id: 6,
    name: "Dr. Harsh Shah",
    speciality: "Cardiologist",
    hospital: "CIMS Hospital",
    state: "Gujarat",
    time: "2:00 - 6:00 PM",
    price: "900",
    exp: "11 Yrs",
    rating: 4.8,
    avatar: hedoc,
  },
  {
    id: 7,
    name: "Dr. Meenal Joshi",
    speciality: "Cardiologist",
    hospital: "Nanavati Hospital",
    state: "Maharashtra",
    time: "10:00 - 2:00 PM",
    price: "1500",
    exp: "16 Yrs",
    rating: 4.9,
    avatar:shedoc,
  },
  {
    id: 8,
    name: "Dr. Vikram Singh",
    speciality: "Cardiologist",
    hospital: "AIIMS",
    state: "Delhi",
    time: "1:00 - 4:00 PM",
    price: "600",
    exp: "8 Yrs",
    rating: 4.5,
    avatar: hedoc,
  },
  {
    id: 9,
    name: "Dr. Shreya Patil",
    speciality: "Cardiologist",
    hospital: "KEM Hospital",
    state: "Maharashtra",
    time: "3:00 - 7:00 PM",
    price: "1100",
    exp: "10 Yrs",
    rating: 4.7,
    avatar:shedoc,
  },
  {
    id: 10,
    name: "Dr. Manish Mehra",
    speciality: "Cardiologist",
    hospital: "Ruby Hall Clinic",
    state: "Maharashtra",
    time: "10:00 - 1:30 PM",
    price: "1300",
    exp: "13 Yrs",
    rating: 4.8,
    avatar: hedoc,
  },
  {
    id: 11,
    name: "Dr. Anjali Saxena",
    speciality: "Cardiologist",
    hospital: "Apollo Hospitals",
    state: "Karnataka",
    time: "11:00 - 3:30 PM",
    price: "900",
    exp: "7 Yrs",
    rating: 4.4,
    avatar:shedoc,
  },
  {
    id: 12,
    name: "Dr. Prakash Jha",
    speciality: "Cardiologist",
    hospital: "Paras Hospital",
    state: "Bihar",
    time: "9:30 - 12:30 PM",
    price: "500",
    exp: "6 Yrs",
    rating: 4.3,
    avatar: hedoc,
  },
  {
    id: 13,
    name: "Dr. Kavita Nair",
    speciality: "Cardiologist",
    hospital: "SUN Hospital",
    state: "Kerala",
    time: "2:00 - 5:00 PM",
    price: "1400",
    exp: "15 Yrs",
    rating: 4.9,
    avatar:shedoc,
  },
  {
    id: 14,
    name: "Dr. Rohit Verma",
    speciality: "Cardiologist",
    hospital: "Care Hospital",
    state: "Telangana",
    time: "1:00 - 4:30 PM",
    price: "750",
    exp: "9 Yrs",
    rating: 4.6,
    avatar: hedoc,
  },
  {
    id: 15,
    name: "Dr. Nisha Suryavanshi",
    speciality: "Cardiologist",
    hospital: "Columbia Asia",
    state: "Karnataka",
    time: "11:30 - 3:00 PM",
    price: "1000",
    exp: "12 Yrs",
    rating: 4.8,
    avatar:shedoc,
  },
  {
    id: 16,
    name: "Dr. Raghav Sharma",
    speciality: "Cardiologist",
    hospital: "AIIMS Rishikesh",
    state: "Uttarakhand",
    time: "10:00 - 1:00 PM",
    price: "650",
    exp: "6 Yrs",
    rating: 4.5,
    avatar: hedoc,
  },
  {
    id: 17,
    name: "Dr. Priya Menon",
    speciality: "Cardiologist",
    hospital: "Aster MIMS",
    state: "Kerala",
    time: "3:00 - 7:00 PM",
    price: "1600",
    exp: "14 Yrs",
    rating: 4.9,
    avatar: hedoc,
  },
  {
    id: 18,
    name: "Dr. Sanjay Kumar",
    speciality: "Cardiologist",
    hospital: "Tata Main Hospital",
    state: "Jharkhand",
    time: "1:00 - 4:00 PM",
    price: "550",
    exp: "5 Yrs",
    rating: 4.2,
    avatar: hedoc,
  },
  {
    id: 19,
    name: "Dr. Lavanya Reddy",
    speciality: "Cardiologist",
    hospital: "Yashoda Hospital",
    state: "Telangana",
    time: "10:30 - 2:00 PM",
    price: "1350",
    exp: "11 Yrs",
    rating: 4.8,
    avatar:shedoc,
  },
  {
    id: 20,
    name: "Dr. Imran Qureshi",
    speciality: "Cardiologist",
    hospital: "Medanta",
    state: "Haryana",
    time: "12:00 - 3:00 PM",
    price: "1800",
    exp: "17 Yrs",
    rating: 5.0,
    avatar: hedoc,
  },
  {
    id: 21,
    name: "Dr. Sneha Bhatt",
    speciality: "Cardiologist",
    hospital: "Fortis Bannerghatta",
    state: "Karnataka",
    time: "10:00 - 1:30 PM",
    price: "950",
    exp: "8 Yrs",
    rating: 4.7,
    avatar:shedoc,
  },
  {
    id: 22,
    name: "Dr. Abdul Wahid",
    speciality: "Cardiologist",
    hospital: "KIMS Hospital",
    state: "Telangana",
    time: "3:30 - 6:30 PM",
    price: "700",
    exp: "7 Yrs",
    rating: 4.5,
    avatar: hedoc,
  },
  {
    id: 23,
    name: "Dr. Shalini Kaur",
    speciality: "Cardiologist",
    hospital: "PGI Chandigarh",
    state: "Punjab",
    time: "9:00 - 12:00 PM",
    price: "600",
    exp: "6 Yrs",
    rating: 4.4,
    avatar: hedoc,
  },
  {
    id: 24,
    name: "Dr. Aayush Malhotra",
    speciality: "Cardiologist",
    hospital: "Sir Ganga Ram Hospital",
    state: "Delhi",
    time: "2:30 - 5:30 PM",
    price: "2000",
    exp: "18 Yrs",
    rating: 5.0,
    avatar: hedoc,
  },
  {
    id: 25,
    name: "Dr. Reshma Nambiar",
    speciality: "Cardiologist",
    hospital: "Aster Hospital",
    state: "Kerala",
    time: "1:00 - 4:00 PM",
    price: "1250",
    exp: "9 Yrs",
    rating: 4.6,
    avatar:shedoc,
  },
  {
    id: 26,
    name: "Dr. Kartik Mohan",
    speciality: "Cardiologist",
    hospital: "BM Birla Heart Research",
    state: "West Bengal",
    time: "10:00 - 2:00 PM",
    price: "1700",
    exp: "14 Yrs",
    rating: 4.9,
    avatar: hedoc,
  },
  {
    id: 27,
    name: "Dr. Radhika Shetty",
    speciality: "Cardiologist",
    hospital: "Manipal Hospital",
    state: "Karnataka",
    time: "4:00 - 7:00 PM",
    price: "900",
    exp: "10 Yrs",
    rating: 4.7,
    avatar:shedoc,
  },
  {
    id: 28,
    name: "Dr. Saifuddin Patel",
    speciality: "Cardiologist",
    hospital: "Sahyadri Hospital",
    state: "Maharashtra",
    time: "10:30 - 1:30 PM",
    price: "850",
    exp: "7 Yrs",
    rating: 4.5,
    avatar: hedoc,
  },
  {
    id: 29,
    name: "Dr. Trisha Dsouza",
    speciality: "Cardiologist",
    hospital: "Narayana Health",
    state: "Karnataka",
    time: "12:00 - 4:00 PM",
    price: "1400",
    exp: "11 Yrs",
    rating: 4.8,
    avatar: hedoc,
  },
  {
    id: 30,
    name: "Dr. Vivek Panchal",
    speciality: "Cardiologist",
    hospital: "Sterling Hospital",
    state: "Gujarat",
    time: "9:00 - 12:30 PM",
    price: "780",
    exp: "6 Yrs",
    rating: 4.4,
    avatar: hedoc,
  },
  {
    id: 31,
    name: "Dr. Nandini Chauhan",
    speciality: "Cardiologist",
    hospital: "Civil Hospital",
    state: "Rajasthan",
    time: "3:00 - 6:00 PM",
    price: "500",
    exp: "4 Yrs",
    rating: 4.2,
    avatar:shedoc,
  },
  {
    id: 32,
    name: "Dr. Arjun Khurana",
    speciality: "Cardiologist",
    hospital: "Max Hospital",
    state: "Punjab",
    time: "10:00 - 1:00 PM",
    price: "2000",
    exp: "19 Yrs",
    rating: 5.0,
    avatar: hedoc,
  },
  {
    id: 33,
    name: "Dr. Neha Shukla",
    speciality: "Cardiologist",
    hospital: "AIIMS",
    state: "Uttar Pradesh",
    time: "2:00 - 6:00 PM",
    price: "950",
    exp: "9 Yrs",
    rating: 4.7,
    avatar:shedoc,
  },
];


const DoctorsList = () => {
  const [search, setSearch] = useState("");

  // 🌟 FILTER BY: name + speciality + state + hospital
  const filteredDoctors = doctors.filter((doc) => {
    const q = search.toLowerCase();

    return (
      doc.name.toLowerCase().includes(q) ||
      doc.speciality.toLowerCase().includes(q) ||
      doc.hospital.toLowerCase().includes(q) ||
      doc.state.toLowerCase().includes(q)
    );
  });
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f7faff] px-4 pt-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          to="/Home"
          className="h-10 w-10 bg-white rounded-xl shadow flex items-center justify-center"
        >
          <FiArrowLeft size={22} />
        </Link>

        <h1 className="text-lg font-semibold">Doctors</h1>

        <div className="h-10 w-10 rounded-full bg-white shadow flex items-center justify-center">
          <FiBell size={22} />
        </div>
      </div>

      {/* Search Box */}
      <div className="bg-white shadow-md rounded-2xl flex items-center px-4 py-3 mt-6 gap-3">
        <FiSearch size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by name, speciality, state..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none text-xs bg-transparent"
        />
        <div className="h-9 w-9 flex items-center justify-center bg-green-500 text-white rounded-xl shadow">
          <FiSliders />
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="mt-6 space-y-5 d-listcard">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <div key={doc.id} className="bg-white p-4 rounded-2xl shadow-md" style={{position:"relative"}}>
              <div className="flex gap-4">
                <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-4xl">
                  <img
                    src={doc.avatar}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-semibold text-sm">{doc.name}</h2>
                  <p className="text-xs text-gray-600 font-semibold mt-1">
                    {doc.speciality}
                  </p>

                  <p className="text-xs text-gray-600 font-semibold mt-1">
                    {doc.state} - {doc.hospital}
                  </p>

                  {/* <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
                    <span>🕒 {doc.time}</span>
                  </div> */}

                  <div className="flex items-center gap-4 mt-1 text-gray-600 text-xs font-semibold">
                    
                    <span>{doc.exp} Experience</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 bg-blue-500 px-2 py-1 rounded-full text-xs text-white" 
              style={{position:"absolute",top:"10px",right:"10px"}}>
                <IoIosStar /> {doc.rating}
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1 text-xs font-semibold text-gray-600">
                  <span>₹ {doc.price} - Consulting fees</span>
                </div>
                <button className="px-3 py-2 bg-green-500 text-white text-xs font-medium rounded-full shadow"
                onClick={() =>
                  navigate("/book-appointment", { state: { doctor: doc } })
                }>
                  Book Clinic Visit
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No doctors found</p>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default DoctorsList;