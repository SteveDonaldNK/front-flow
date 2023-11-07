import React, { useCallback } from 'react'
import { Button, Container, Form, Stack } from 'react-bootstrap'
import { ChevronRight, Facebook, Github, Linkedin } from 'react-bootstrap-icons'
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import options from '../../partiles.json';
import './styles.css'
import { useWindowSize } from 'react-use';
import { breakpoints } from '../../constants';

export default function Newsletter() {
    const { width } = useWindowSize();
    const bp = breakpoints.sm;

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <Container id='newsletter-container' className='p-0 vh-100' fluid>
        <form className='h-75 position-relative'>
            <h1 className='position-absolute'>Subscribe to our newsletter</h1>
            <Stack direction='horizontal' className='position-absolute input-stack' gap={3}>
                <Form.Control
                    type="text"
                    className='rounded-pill'
                />
                    {
                        width <= bp ? 
                        <Button className='rounded-pill icon-btn'>
                            <ChevronRight size={22} /> 
                        </Button> : 
                        <Button className='rounded-pill px-4 py-2'>
                            Subscribe 
                        </Button>
                    }
            </Stack>
            <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded} />
        </form>
        <div className='w-100 h-25 d-flex flex-column align-items-center justify-content-center gap-3'>
            <h4>Follow us</h4>
            <Stack className='justify-content-center' direction='horizontal' gap={4}>
                <Facebook size={28} />
                <Linkedin size={28} />
                <Github size={28} />
            </Stack>
        </div>
    </Container>
  )
}
