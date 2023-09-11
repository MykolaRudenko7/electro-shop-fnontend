import intelPicture from 'images/AboutPage/Features/image0.png'
import nvidiaPicture from 'images/AboutPage/Features/image1.png'
import ssdPicture from 'images/AboutPage/Features/image2.png'
import ddrPicture from 'images/AboutPage/Features/image3.png'

export const featuresData = [
  {
    imageSrc: intelPicture,
    alt: 'product picture',
    description: (
      <p>
        <b>Intel® Core™ i7</b> processor with the upmost computing power to bring you an
        unparalleled gaming experience.
      </p>
    ),
  },
  {
    imageSrc: nvidiaPicture,
    alt: 'product picture',
    description: (
      <p>
        The new <b>GeForce® RTX SUPER™</b> Series has more cores and higher clocks for superfast
        performance compared to previous-gen GPUs.,
      </p>
    ),
  },
  {
    imageSrc: ssdPicture,
    alt: 'product picture',
    description: (
      <p>
        Unleash the full potential with the latest <b>SSD technology</b>, the NVM Express. 6 times
        faster than traditional SATA SSD.
      </p>
    ),
  },
  {
    imageSrc: ddrPicture,
    alt: 'product picture',
    description: (
      <p>
        Featuring the latest <b>10th Gen Intel® Core™</b> processors, memory can support up to
        DDR4 2933MHz to delivers an unprecedented gaming experience.
      </p>
    ),
  },
]
