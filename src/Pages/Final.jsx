import React from 'react'
import Card from '../Components/Card'
const Final = () => {
  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			{/* cards */}
            <Card imgSrc="https://source.unsplash.com/240x320/?portrait?0" name="Shreyansh Pandey" post="President" />
            <Card imgSrc="https://source.unsplash.com/240x320/?portrait?0" name="Aaditya Narayan Pandey" post="President" />
            <Card imgSrc="https://source.unsplash.com/240x320/?portrait?0" name="Abhinav Ojha" post="Vice President" />
            <Card imgSrc="https://source.unsplash.com/240x320/?portrait?0" name="Nikhil Singh" post="Treasurer" />
            <Card imgSrc="https://source.unsplash.com/240x320/?portrait?0" name="Sumit Gupta" post="Secretary" />
            <Card imgSrc="https://source.unsplash.com/240x320/?portrait?0" name="Event Head" post="Event Head" />
            <Card imgSrc="https://source.unsplash.com/240x320/?portrait?0" name="Amit Yadav" post="Media & Publicity Head" />
            <Card imgSrc="https://source.unsplash.com/240x320/?portrait?0" name="Vikas Kumar" post="Media & Publicity Head" />
            <Card imgSrc="https://source.unsplash.com/240x320/?portrait?0" name="Anshu" post="Mentor" />
            <Card imgSrc="https://source.unsplash.com/240x320/?portrait?0" name="Shivangi Sharma" post="Mentor" />
           

		</div>
    </div>
  )
}

export default Final
