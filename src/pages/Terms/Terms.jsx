import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './styles.css'

export default function Terms() {
    const headings = [{ 
        heading: 'Conditions of use',
        content: 'Medium’s failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word “including” will be interpreted to mean “including without limitation.” Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.'
    }, {
        heading: 'Privacy Policy',
        content: 'Medium’s failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word “including” will be interpreted to mean “including without limitation.” Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.'
    }, {
        heading: 'Copyright', 
        content: 'Medium’s failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word “including” will be interpreted to mean “including without limitation.” Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.'
    }, {
        heading: 'Communications', 
        content: 'Medium’s failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word “including” will be interpreted to mean “including without limitation.” Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.'
    }, {
        heading: 'Applicable law', 
        content: 'Medium’s failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word “including” will be interpreted to mean “including without limitation.” Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.'
    }, {
        heading: 'Disputes', 
        content: 'Medium’s failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word “including” will be interpreted to mean “including without limitation.” Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.'
    }, {
        heading:  'Comments, Reviews and Emails', 
        content: 'Medium’s failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word “including” will be interpreted to mean “including without limitation.” Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.'
    }, {
        heading: 'License and Site Access', 
        content: 'Medium’s failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word “including” will be interpreted to mean “including without limitation.” Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.'
    }, {
        heading: 'User Account',
        content: 'Medium’s failure to exercise or enforce any right or provision of these Terms will not operate as a waiver of such right or provision. These Terms, and the terms and policies listed in the Other Terms and Policies that May Apply to You Section, reflect the entire agreement between the parties relating to the subject matter hereof and supersede all prior agreements, statements and understandings of the parties. The section titles in these Terms are for convenience only and have no legal or contractual effect. Use of the word “including” will be interpreted to mean “including without limitation.” Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third-party beneficiary rights upon any other person or entity. You agree that communications and transactions between us may be conducted electronically.'
    }
]

  return (
    <Container id='terms-container' className='p-0' fluid>
        <div className='position-relative'>
            <h1 className='back-font text-center'>Terms of Service</h1>
            <h1 className='main-heading position-absolute text-center'>Terms of Service</h1>
        </div>
        <Row className='m-0 px-5 py-4'>
            <Col className='d-flex flex-column gap-2' lg={3} md={4}>
                {
                    headings.map(({heading}, index) => (
                        <h6 className='term-heading-nav' >{index+1}. {heading}</h6>
                    ))
                }
            </Col>
            <Col className='pe-5 text-container' lg={9} md={8}>
                {
                    headings.map(({heading, content}, index) => (
                        <>
                            <h6 className='term-heading' >{index+1}. {heading}</h6>
                            <p>{content}</p>
                        </>
                    ))
                }
            </Col>
        </Row>
    </Container>
  )
}
