import {BallCanvas} from './Ball.jsx'
import { technologies } from './Technologies';



const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center py-[120px] gap-10'>
      {technologies.map((technology) => (
        <div key={technology.name} className='w-28 h-28'>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
    </div>
  )
}

export default Tech;
