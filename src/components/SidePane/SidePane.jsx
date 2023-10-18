import React, { useState, useRef, useEffect } from 'react'
import { ChevronCompactLeft, ChevronCompactRight } from 'react-bootstrap-icons'
import { Container, Button } from 'react-bootstrap'
import { useWindowSize } from 'react-use'
import SideNav from '../SideNav/SideNav'
import { breakpoints } from '../../constants'
import './styles.css'

export default function SidePane() {
  const bp = breakpoints.md;
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();
  const paneRef = useRef(null);

  const handleShow = () => {
    const paneClassList = paneRef.current.classList;
    paneClassList.toggle("active");
    paneClassList.contains("active") ? setOpen(true) : setOpen(false);
  }

  const resetPane = () => {
    setOpen(false);
    paneRef.current.classList.remove("active");
  }
  
  // when width changes, simply close the pane while making sure its position is reset
  useEffect(() => {
    width <= bp && resetPane()
  }, [width])

  return (
    <Container ref={paneRef} className={`side-pane`}>
        <Button onClick={handleShow} className='position-absolute pane-btn'>
          {
            open ?
            <ChevronCompactRight color={'var(--grey-color-xxl)'} size={32} />
            :
            <ChevronCompactLeft color={'var(--grey-color-xxl)'} size={32} />
          }
        </Button>
        <SideNav />
    </Container>
  )
}
