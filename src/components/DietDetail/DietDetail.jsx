import React from "react";
import { useParams } from "react-router-dom";
import "./DietDetail.style.css";

// 임시 식단 상세 정보 (구현시 서버에서 가져와야 함)
const tempDietDetails = {
  "2024-09-01": "상세 식단 정보 1",
  "2024-09-02": "상세 식단 정보 2",
  "2024-09-03": "상세 식단 정보 3",
};

const DietDetail = () => {
  //date 날짜 가져오기
  const { date } = useParams();
  const detail = tempDietDetails[date];

  return (
    <div className="diet-detail-container">
      <h1>{date}의 식단 정보</h1>
      {detail ? (
        <div className="diet-info">
          <p>{detail}</p>
        </div>
      ) : (
        <p className="no-diet-info">식단 정보가 없습니다.</p>
      )}
    </div>
  );
};

export default DietDetail;
