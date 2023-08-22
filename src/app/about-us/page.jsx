import { useId } from 'react'
import { infoSectionData } from 'data/infoSectionData'
import AbouUsInfoSection from 'components/AboutUsPage/AbouUsInfoSection'
import Slider from 'components/shared/FeedbackSlider'

export default function AboutUs() {
  return (
    <>
      {infoSectionData.map((section) => (
        <AbouUsInfoSection key={useId()} {...section} />
      ))}
      <Slider />
    </>
  )
}
