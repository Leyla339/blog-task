import React, { useState } from "react";
import career from "./img/career.jpg";
import interview from "./img/interview.jpg";
import student from "./img/student.jpg";
import freelance from "./img/freelance.jpg";
import j2025 from "./img/2025.jpg";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Uğurlu karyera üçün CV necə hazırlanmalıdır?",
      content:
        "CV hazırlayarkən diqqət yetirilməli detalları və sizi fərqləndirəcək əsas nüansları bu bloqda öyrənə bilərsiniz.",
      author: "Nigar Quliyeva",
      date: "02 Avqust 2025",
      image: career,
      path: "career-cv",
    },
    {
      id: 2,
      title: "Müsahibədə ən çox verilən 10 sual və cavabları",
      content:
        "İşə qəbul prosesində qarşınıza çıxacaq əsas sualları və onlara cavab vermək üsullarını sizin üçün topladıq.",
      author: "Orxan Həsənov",
      date: "29 İyul 2025",
      image: interview,
      path: "interview-questions",
    },
    {
      id: 3,
      title: "Tələbələr üçün yarımştat iş imkanları",
      content:
        "Universitetdə oxuyanlar üçün uyğun iş təkliflərini və hansı platformalardan faydalana biləcəklərini təqdim edirik.",
      author: "Rəşad Məmmədov",
      date: "01 Avqust 2025",
      image: student,
      path: "student-part-time-job",
    },
    {
      id: 4,
      title: "Ev şəraitində işləmək üçün 7 sahə",
      content:
        "Remote və freelancer işləmək istəyənlər üçün ən perspektivli 7 sahəni və tövsiyələri bu yazıda tapa bilərsiniz.",
      author: "Nigar Hüseynli",
      date: "28 İyul 2025",
      image: freelance,
      path: "freelance-jobs",
    },
    {
      id: 5,
      title: "Ən çox tələb olunan peşələr 2025-ci ildə",
      content:
        "2025-ci ildə hansı sahələrdə iş imkanları artacaq? Bu bloqda əmək bazarının trendlərini sizin üçün təhlil edirik.",
      author: "Leyla Əhmədova",
      date: "03 Avqust 2025",
      image: j2025,
      path: "2025-jobs",
    },
  ]);
  return (
    <div className="container">
      <div className="cards">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt="card-img" />
            <div className="card-content">
              <h1 className="title">{card.title}</h1>
              <p className="content">{card.content}</p>
              <div className="details">
                <h2 className="author">{card.author}</h2>
                <h3 className="date">{card.date}</h3>
              </div>
              <Link to={`/blog-task${card.path}`} className="read-more">
                Daha çox oxu
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
