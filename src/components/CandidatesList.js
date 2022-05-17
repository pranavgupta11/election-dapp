import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import db from '../firebase/firebase';
import "./CandidateList.css";

const CandidateListRow = ({ name, party, qual, aadh, photo }) => {
  return (
    <div className="CandidateListRow">
      <div>{name}</div>
      <div>{party}</div>
      <div>{qual}</div>
      <div>{aadh}</div>
      <div>
        <img className="photo" src={photo} alt={name} />
      </div>
    </div>
  );
};

export default function CandidatesList() {
  const [candid, setCandid] = useState([]);

  const getCandidates = async (e) => {
    var querySnapshot = await getDocs(collection(db, "candidates"));

    var temp = [];

    querySnapshot.forEach((d) => {
      // console.log(d.data());
      temp.push(d.data());
    });
    console.log(temp);
    setCandid(temp);

    console.log(candid);
  };

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <div className="CandidateListTable">
      <div className="CandidateListHeader">
        <div>Name</div>
        <div>Party</div>
        <div>Qualifications</div>
        <div>Aadhaar</div>
        <div>Photo</div>
      </div>
      <div className="CandidateListBody">
        {candid.map((rowData) => (
          <CandidateListRow {...rowData} />
        ))}
      </div>
    </div>
  );
}
