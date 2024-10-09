import React from 'react'
import Card from '../Components/Card'

import a from "../Images/Members/2025/Shreyansh_Pandey.jpg"
import b from "../Images/Members/2025/Aaditya_Narayan_Pandey.jpg"
import c from "../Images/Members/2025/Abhinav_Ojha.jpg"
import d from "../Images/Members/2025/Amit_Yadav.jpg"
import e from "../Images/Members/2025/Kumar_Saurabh.jpg"
import f from "../Images/Members/2025/Vikas_Kumar.jpg"
import g from "../Images/Members/2025/Sumit.jpeg"
import h from "../Images/Members/2025/Shiv.jpeg"
import i from "../Images/Members/2025/Nikhil_2025.jpg"
// import a from "../Images/Members/2025/"
const Final = () => {
  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 items-center">
			{/* cards */}
            <Card imgSrc={a} name="Shreyansh Pandey" post="President" />
            <Card imgSrc={b} name="Aaditya Narayan Pandey" post="President" />
            <Card imgSrc={c} name="Abhinav Ojha" post="Vice President" />
            <Card imgSrc={i} name="Nikhil Singh" post="Treasurer" />
            <Card imgSrc={g} name="Sumit Gupta" post="Secretary" />
            <Card imgSrc={h} name="Shiv Narayan" post="Event Head" />
            <Card imgSrc={e} name="Kumar Saurabh" post="Event Head" />
            <Card imgSrc={d} name="Amit Yadav" post="Media & Publicity Head" />
            <Card imgSrc={f} name="Vikas Kumar" post="Media & Publicity Head" />
            {/* <Card imgSrc={} name="Anshu" post="Mentor" /> */}
            {/* <Card imgSrc={} name="Shivangi Sharma" post="Mentor" /> */}
           

		</div>
    </div>
  )
}

export default Final
