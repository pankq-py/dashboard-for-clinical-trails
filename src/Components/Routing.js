import React from 'react';

import { Routes, Route, } from "react-router-dom";

import HomePage from '../Pages/HomePage';
import ListOfParticipants from '../Pages/ListOfParticipants';
import ParticipantsDetails from '../Pages/ParticipantsDetails';

import ByClinicalTrials from '../Pages/ByClinicalTrials';
import ByLocationType from '../Pages/ByLocationType';
import ByTrialStatus from '../Pages/ByTrialStatus';
import ByStudyType from '../Pages/ByStudyType';

import PIInsight from '../Pages/PIInsight';
import NewsAndEvents from '../Pages/NewsAndEvents';
// import SignUpForm from '../Pages/SignUpForm';
// import SignInForm from '../Pages/SignInForm';
import Profile from '../Pages/Profile';


export default function Routing() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="ListOfParticipants" element={<ListOfParticipants />} />
      <Route path="/ListOfParticipants/ParticipantsDetails/:userId" element={<ParticipantsDetails /> }/>
      <Route path="ByClinicalTrials" element={<ByClinicalTrials />} />
      <Route path="ByLocationType" element={<ByLocationType />} />
      <Route path="ByTrialStatus" element={<ByTrialStatus />} />
      <Route path="ByStudyType" element={<ByStudyType />} />
      <Route path="PIInsight" element={<PIInsight />} />
      <Route path="NewsAndEvents" element={<NewsAndEvents />} />
      {/* <Route path="SignUp" element={<SignUpForm />} />
      <Route path="SignIn" element={<SignInForm />} /> */}
      <Route path="Profile" element={<Profile />} />
    </Routes>

  );
}