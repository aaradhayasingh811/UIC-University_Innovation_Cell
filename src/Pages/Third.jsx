import React from 'react'
import Card from '../Components/Card'
import a from '../Images/Members/2026/Aaradhaya_Singh.jpeg'
import b from '../Images/Members/2026/Avinash_Mishra.jpg'
import c from '../Images/Members/2026/Anubhav_Singh.jpg'
import d from '../Images/Members/2026/Anushka_Tripathi.jpeg'
import e from '../Images/Members/2026/Akanksha.jpg'
import f from '../Images/Members/2026/Anjali.jpeg'
import g from '../Images/Members/2026/Yuvraj_Singh.jpg'
import h from '../Images/Members/2026/Animesh_Kumar_Goyal.jpg'
import i from '../Images/Members/2026/Aqsa_Siddiqui.jpg'
import j from '../Images/Members/2026/Ayush_Kannojia.jpg'
import k from '../Images/Members/2026/Priya_Singh.jpg'
import l from '../Images/Members/2026/Ananya_Shukla.jpeg'
import m from '../Images/Members/2026/Abhimanyu.jpg'
import n from '../Images/Members/2026/Mansi_Upadhyay.jpg'
import o from '../Images/Members/2026/Reetika_Verma.jpg'
import p from '../Images/Members/2026/Abhyodaya_Singh.jpg'
import q from '../Images/Members/2026/Piyush_Tyagi.jpg'
import r from '../Images/Members/2026/Ayush_Upadhyay.jpg'
import s from '../Images/Members/2026/Khushi_Arya.jpg'
import t from '../Images/Members/2026/Vidit_yadav.jpg'
import u from '../Images/Members/2026/Shaurya_Srivastav.jpg'
// import  from '../Images/Members/2026/'
// import  from '../Images/Members/2026/'
// import  from '../Images/Members/2026/'
// import  from '../Images/Members/2026/'
// import  from '../Images/Members/2026/'
// import  from '../Images/Members/2026/'

const Third = () => {
  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			{/* cards */}
            <Card imgSrc={a} name="Aaradhaya Singh" post="Editorial & Content Lead" />
            <Card imgSrc={b} name="Avinash Mishra" post="Editorial & Content Lead" />
            <Card imgSrc={c} name="Anubhav Singh" post="Editorial & Content Lead" />
            <Card imgSrc={d} name="Anushka Tripathi" post="Editorial & Content Lead" />

            {/* <Card imgSrc={} name="Aniket Shukla" post="Event and Outreach Lead" /> */}
            <Card imgSrc={e} name="Akanksha" post="Event and Outreach Lead" />
            <Card imgSrc={f} name="Anjali Shekhar" post="Event and Outreach Lead" />
            <Card imgSrc={g} name="Yuvraj Singh" post="Event and Outreach Lead" />

            <Card imgSrc={h} name="Animesh Kumar Goyal" post="Managerial Lead" />
            <Card imgSrc={i} name="Aqsa Siddiqui" post="Managerial Lead" />
            <Card imgSrc={j} name="Ayush Kannojia" post="Managerial Lead" />
            <Card imgSrc={k} name="Priya Singh" post="Managerial Lead" />

            {/* <Card imgSrc={} name="Aman Patel" post="Promotional & Social Media Lead" /> */}
            <Card imgSrc={l} name="Ananya Shukla" post="Promotional & Social Media Lead" />
            <Card imgSrc={m} name="Abhimanyu Singh" post="Promotional & Social Media Lead" />

            <Card imgSrc={n} name="Mansi Upadhyay" post="Innovative Arts Lead" />
            {/* <Card imgSrc={} name="Nikhil Kumar" post="Innovative Arts Lead" /> */}
            <Card imgSrc={o} name="Reetika Verma" post="Innovative Arts Lead" />

            <Card imgSrc={p} name="Abhyodaya Pratap Singh" post="Video & Technical Lead" />
            <Card imgSrc={q} name="Piyush Tyagi" post="Video & Technical Lead" />
            <Card imgSrc={r} name="Ayush Upadhyay" post="Video & Technical Lead" />

            <Card imgSrc={s} name="Khushi Arya" post="Designing Lead" />
            <Card imgSrc={t} name="Vidit Yaduvancy" post="Designing Lead" />
            <Card imgSrc={u} name="Shaurya Srivastava" post="Designing Lead" />
            

            
		</div>
    </div>
  )
}

export default Third
