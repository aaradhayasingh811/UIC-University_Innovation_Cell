import React, { useState } from 'react'
import Card from '../Components/Card'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Final from './Final'
import Third from './Third'
import Second from './Second'
const Team = () => {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const handleFinalYear = () => {
        setCount1(1);
        setCount2(0);
        setCount3(0);
    };

    const handlePreFinalYear = () => {
        setCount1(0);
        setCount2(1);
        setCount3(0);
    };

    const handleSophomoreYear = () => {
        setCount1(0);
        setCount2(0);
        setCount3(1);
    };
  return (


    <>
    <Nav/>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-800 team">
	<div className="container p-4 mx-auto space-y-16 sm:p-10 flex-col">
		<div className="space-y-4">
			<h3 className="text-2xl font-bold leading-none sm:text-5xl heading">Meet our team</h3>
			<p className="max-w-2xl dark:text-gray-600">A strong team thrives on collaboration, where diverse strengths unite toward a common goal. Each member brings unique perspectives, fostering creativity and innovation. Communication is key, enabling trust and support that drive success. In challenges, the team's resilience shines, turning obstacles into opportunities. Together, they not only achieve greatness but also build lasting bonds that extend beyond the workplace.</p>
		</div>
		
         <div className="flex items-center md:flex-row flex-col">
                <div className="button mx-12 my-2 items-center" onClick={handleFinalYear}>Final year</div>
                <div className="button mx-12 my-2" onClick={handlePreFinalYear}>Pre-Final year</div>
                <div className="button mx-12 my-2" onClick={handleSophomoreYear}>Sophomore year</div>
            </div>
            {count1 === 1 && <Final />}
            {count2 === 1 && <Third />}
            {count3 === 1 && <Second />}

	</div>
</section>
<Footer/>
    </>
  )
}

export default Team
 