import React from "react";
import cv from "./img/cv.jpg";
import success from "./img/success.jpg";
import "./Career.css";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <div className="career">
      <div className="c-top">
        <div>
          <Link to="/blog-task">
            <IoArrowBack className="back" />
          </Link>
          <h1>Uğurlu karyera üçün CV necə hazırlanmalıdır?</h1>
          <div className="c-details">
            <p>Nigar Quliyeva</p>
            <p>2 Avqust 2025</p>
          </div>
        </div>
        <img src={cv} alt="cv-numunesi" className="cv-image" />
      </div>
      <div className="c-content">
        <p>CV hazırlayarkən diqqət edilməli əsas məqamlar:</p>
        <ol>
          <li>
            Aydın və qısa struktur CV 1-2 səhifədən çox olmamalıdır. Vacib
            məlumatlar ön planda, əlavə məlumatlar isə daha aşağıda olmalıdır.
          </li>
          <li>
            Şəxsi məlumatlar Ad, soyad, əlaqə nömrəsi, e-mail, LinkedIn profili
            (əgər varsa). Fotoşəkil əlavə etmək də olar, amma zəruri deyil.
          </li>
          <li>
            {" "}
            Məqsəd (Objective) Qısa və konkret formada işə müraciət etmə
            səbəbinizi və hədəfinizi yazın.{" "}
          </li>
          <li>
            {" "}
            Təhsil Universitet, ixtisas, oxuduğunuz illər. Əgər yeni
            məzunsunuzsa, bu bölməyə daha çox önəm verin.
          </li>
          <li>
            İş təcrübəsi Əvvəlki iş yerləri, vəzifə, görülən işlər və
            nailiyyətlər. Ən sonuncu təcrübədən başlayaraq geriyə doğru yazın.
          </li>
          <li>
            Bacarıqlar Texniki bacarıqlar, yumşaq bacarıqlar (komanda işi,
            ünsiyyət bacarığı) və dil bilikləri.
          </li>
          <li>
            Sertifikatlar və kurslar Bitirdiyiniz online və ya offline kursları,
            iştirak etdiyiniz təlimləri sadalayın.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Career;
