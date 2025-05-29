import {useState} from 'react'

const  useHandleScroll = () => {
  const [nav, setNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  return {nav, handleScroll}
}

export default useHandleScroll