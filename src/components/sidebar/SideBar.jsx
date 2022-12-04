import c from './SideBar.module.css';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import { FcBusinessman } from 'react-icons/fc'
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {

  const sidebaropen = useRef();
  const [sidebarLimit ] = useState(4);
  const [selectedSidebarItem, setSelectedSidebarItem] = useState(null);
  const sidebarData = [
    {
      sidebarmaintitle: "Amazon Music",
      subitems: [
        "Amazon music unlimited",
        "Podcasts"
      ]
    },
    {
      sidebarmaintitle: "Amazon music 1",
      subitems: [
        "Amazon music unlimited",
        "Podcasts"
      ]
    },
    {
      sidebarmaintitle: "Amazon music 2",
      subitems: [
        "Amazon music unlimited",
        "Podcasts"
      ]
    },
    {
      sidebarmaintitle: "Amazon music 3",
      subitems: [
        "Amazon music unlimited 3",
        "Podcasts 3"
      ]
    }
  ]

  useEffect(() => {
    if (selectedSidebarItem) {
      sidebaropen.current.scrollLeft = sidebaropen.current.offsetWidth
    }
    else {
      sidebaropen.current.scrollLeft = 0
    }
  }, [selectedSidebarItem])

  return (
    <div ref={sidebaropen} className={isSidebarOpen === true ? `${c.sidebar} ${c.active}` : `${c.sidebar}`}>

      <div className={c.SingIn}  >{FcBusinessman}<h1>  Hello sing In</h1> </div>
      <FiX className={c.close} onClick={() => { setIsSidebarOpen(false) }} />
      <div className={c.sidebarWrapper} >
        {
          sidebarData.slice(0, sidebarLimit).map(sidebarEl =>
            <div key={uuidv4()} className={c.sidebarItem} onClick={() => { setSelectedSidebarItem(sidebarEl) }}>
              <p>{sidebarEl.sidebarmaintitle}</p>
            </div>
          )
        }
        



      </div>
      <div className={c.sidebarOpen}>
        <div onClick={() => { setSelectedSidebarItem(null) }} className={c.CloseWrap}>
          <FiArrowLeft className={c.closeBtn} onClick={() => { setSelectedSidebarItem(null) }} />
          <h3>Main menu</h3>
        </div>

        <div className={c.openingSide}>
          <h2>Stream Music</h2>
          <p className={c.sideOPenHover}>Amzon Music Unlimite</p>
          <p className={c.sideOPenHover}>POdcats</p>
          <p className={c.sideOPenHover}>Play Music</p>

        </div>
      </div>
    </div>
  )
}

export default Sidebar