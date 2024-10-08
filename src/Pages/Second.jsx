import React from 'react'
import Card from '../Components/Card'
import a from '../Images/Members/2027/Akhilendra_Singh.jpg'
import b from '../Images/Members/2027/Anjali_Sharma.jpg'
import c from '../Images/Members/2027/Ankit_Patwa.jpg'
import d from '../Images/Members/2027/Anurag_Singh.jpg'
import e from '../Images/Members/2027/Anushka_Singh.jpg'
import f from '../Images/Members/2027/Aradhana_Mishra.jpg'
import g from '../Images/Members/2027/Arpita_Verma.jpg'
import h from '../Images/Members/2027/Ashutosh_Maurya.jpg'
import i from '../Images/Members/2027/Bhumi_Bhatnagar.jpg'
import j from '../Images/Members/2027/Devesh_Mishra.jpeg'
import k from '../Images/Members/2027/DEVESH_SHARMA.jpg'
import l from '../Images/Members/2027/Diksha_Kushawaha.jpg'
import m from '../Images/Members/2027/Divya_Dubey.jpg'
import n from '../Images/Members/2027/Khushi_Gupta.jpg'
import o from '../Images/Members/2027/Kishan_Chaubey.jpg'
import p from '../Images/Members/2027/Madulika_Rao.jpg'
import q from '../Images/Members/2027/Nidhi_Singh.jpg'
import r from '../Images/Members/2027/Nilesh_Kumar.jpg'
import s from '../Images/Members/2027/Prachi_Yadav.jpg'
import t from '../Images/Members/2027/Pranjali.jpg'
import u from '../Images/Members/2027/Priyanshu_Chauhan.jpg'
import v from '../Images/Members/2027/Riddhi_Agarwal.jpg'
import w from '../Images/Members/2027/Ritu_Agarwal.jpg'
import x from '../Images/Members/2027/Shashank_Bhardwaj.jpg'
import y from '../Images/Members/2027/Shashank_Kumar.jpg'
import z from '../Images/Members/2027/Shraddha_Singh.jpg'
import aa from '../Images/Members/2027/Shrestha_Gupta.jpg'
import ab from '../Images/Members/2027/Shubham_Rai.jpg'
import ac from '../Images/Members/2027/Tejas_Vishwakarma.jpg'
import ad from '../Images/Members/2027/Vivek_Yadav.jpeg'
const Second = () => {
  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			{/* cards */}
            <Card imgSrc={a} name="Akhilendra Singh" post="Executive Member" />
            <Card imgSrc={b} name="Anjali Sharma" post="Executive Member" />
            <Card imgSrc={c} name="Ankit Patwa" post="Executive Member" />
            <Card imgSrc={d} name="Anurag singh" post="Executive Member" />
            <Card imgSrc={e} name="Anushka Singh" post="Executive Member" />
            <Card imgSrc={f} name="Aradhana Mishra" post="Executive Member" />
            <Card imgSrc={g} name="Arpita Verma" post="Executive Member" />
            <Card imgSrc={h} name="Ashutosh Maurya" post="Executive Member" />
            <Card imgSrc={i} name="Bhumi Bhatanagar" post="Executive Member" />
            <Card imgSrc={j} name="Devesh Mishra" post="Executive Member" />
            <Card imgSrc={k} name="Devesh Sharma" post="Executive Member" />
            <Card imgSrc={l} name="Diksha Kushwaha" post="Executive Member" />
            <Card imgSrc={m} name="Divya Dubey" post="Executive Member" />
            <Card imgSrc={n} name="Khushi Gupta" post="Executive Member" />
            <Card imgSrc={o} name="Kishan Chaubey" post="Executive Member" />
            <Card imgSrc={p} name="Madhulika Rao" post="Executive Member" />
            <Card imgSrc={q} name="Nidhi Singh" post="Executive Member" />
            <Card imgSrc={r} name="Nilesh Kumar" post="Executive Member" />
            <Card imgSrc={s} name="Prachi Yadav" post="Executive Member" />
            <Card imgSrc={t} name="Pranjali" post="Executive Member" />
            <Card imgSrc={u} name="Priyanshu Chauhan" post="Executive Member" />
            <Card imgSrc={v} name="Riddhi Agarwal" post="Executive Member" />
            <Card imgSrc={w} name="Ritu Agarwal" post="Executive Member" />
            <Card imgSrc={x} name="Shashank Bhardwaj" post="Executive Member" />
            <Card imgSrc={y} name="Shashank Kumar" post="Executive Member" />
            <Card imgSrc={z} name="Shraddha Singh" post="Executive Member" />
            <Card imgSrc={aa} name="Shrestha Gupta" post="Executive Member" />
            <Card imgSrc={ab} name="Shubham Rai" post="Executive Member" />
            <Card imgSrc={ac} name="Tejas Vishwakarma" post="Executive Member" />
            <Card imgSrc={ad} name="Vivek Yadav" post="Executive Member" />
            
		</div>
    </div>
  )
}

export default Second
