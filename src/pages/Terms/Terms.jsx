import React from 'react'
import { Container } from 'react-bootstrap'
import { terms } from '../../constants'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Footer from '../../components/Footer/Footer'
import './styles.css'

export default function Terms() {

    return (
        <Container id='terms-container' className='p-0' fluid>
            <NavigationBar />
            <div className='position-relative mb-3'>
                <h1 className='back-font text-center'>Terms of Service</h1>
                <h1 className='main-heading position-absolute text-center'>Terms of Service</h1>
            </div>
            <div className='text-container pb-2' >
                {
                    terms.map(({heading, content}, index) => (
                        <div key={index}>
                            <h6 id={heading} className='term-heading' >{index+1}. {heading}</h6>
                            <p>{content}</p>
                        </div>
                    ))
                }
            </div>
            <section id='footer-section'>
            <Footer />
            </section>
        </Container>
        )
    }
