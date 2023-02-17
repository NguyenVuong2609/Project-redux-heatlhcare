import React from 'react';
import Banner from '../components/Banner';
import AboutData from '../components/About/AboutData';
import NewData from '../components/News/NewData';
import SolutionsMain from '../components/Solutions/SolutionMain';
import CaseMain from '../components/Cases/CaseMain';
import DoctorMain from '../components/Doctors/DoctorMain';
import Subcribes from '../components/Subcribes';

export default function Home() {
  return (
    <div>
        <Banner/>
        <AboutData/>
        <NewData/>
        <SolutionsMain/>
        <CaseMain/>
        <DoctorMain/>
        <Subcribes/>
    </div>
  )
}

