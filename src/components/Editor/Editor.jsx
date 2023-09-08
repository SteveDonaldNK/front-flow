import React, { useState } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import ImageResize from 'quill-image-resize-module-react'
import Preview from '../Preview/Preview';
import 'react-quill/dist/quill.snow.css';
import './styles.css'
import { Button, Col, Container, Form, Image, Offcanvas,Row, Stack } from 'react-bootstrap';
import { FileUploader } from 'react-drag-drop-files';
import { EyeFill } from 'react-bootstrap-icons';

Quill.register('modules/imageResize', ImageResize)

export default function Editor() {
    const [value, setValue] = useState('');
    const [file, setFile] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const fileTypes = ["JPG", "PNG", "webp"];
    const toolbarOptions = [
        [{ 'size': ['small', false, 'large', 'huge'] },'bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'list': 'bullet'}, { 'list': 'ordered' }, { 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
        ['link', 'image', 'clean'],
    ];

    const handleChange = (file) => {
        setFile(file);
        const url = URL.createObjectURL(file)
    };
    const handleRemove = () => {
        setFile(null);
    };

  return (
    <Container className='p-0' fluid>
        <h2>Create a post</h2>
        <Stack direction='horizontal' className='align-center gap-2 mb-4'>
            <Button onClick={() => setModalShow(true)} variant='light' className='p-1 preview-btn'>
                <EyeFill size={28} color='var(--grey-color-xl)' />
            </Button>
            <p className='fw-bold m-0 text-secondary'>Preview</p>
        </Stack>
        <Preview show={modalShow}
        onHide={() => setModalShow(false)} />
        <Row className='gy-4 compose-row'>
            <Col xl={8} lg={12}>
                <Form className='editor-form'>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control className='mb-3 post-title' type="text" placeholder="Enter post title" />
                        <Form.Label>Content</Form.Label>
                        <ReactQuill className='editor' theme='snow' formats={[
                            "size",
                            "bold",
                            "italic",
                            "underline",
                            "strike",
                            "blockquote",
                            "code-block",
                            "bullet",
                            "list",
                            "indent",
                            "align",
                            "color",
                            "background",
                            "link",
                            "image",
                            ]} modules={{ toolbar: toolbarOptions,
                            clipboard: {
                                matchVisual: false,
                            }, imageResize: {
                            parchment: Quill.import('parchment'),
                            modules: ['Resize', 'DisplaySize']
                        }}} value={value} onChange={setValue} />
                    </Form.Group>
                </Form>
            </Col>
            <Col xl={4} lg={12}>
                <Container className='p-0 m-0 position-sticky top-0' fluid>
                    <Container className='featured-image-container px-4 py-5' fluid>
                        <h5 className='fw-bold mb-4'>Featured image</h5>
                        <Container className='m-0 p-0' fluid>
                        {file ? <Image className='featured-image' src={URL.createObjectURL(file)} />:
                            <FileUploader label="Upload or drop a file here" maxSize={15} handleChange={handleChange} name='file' types={fileTypes} />
                        }
                        </Container>
                        <Container className='w-100 p-0 text-end mt-3'>
                            <Button onClick={handleRemove} variant='outline-danger' className='m-auto'>Remove</Button>
                        </Container>
                    </Container>
                </Container>
            </Col>
        </Row>
    </Container>
  )
}
