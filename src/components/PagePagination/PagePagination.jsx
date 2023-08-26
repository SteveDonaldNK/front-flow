import React from 'react';
import {Pagination, Stack} from 'react-bootstrap';
import { ArrowLeftShort, ArrowRightShort } from 'react-bootstrap-icons';

export default function PagePagination() {
  return (
    <Pagination className='justify-content-between'>
      <Pagination.Prev>
        <Stack direction='horizontal'>
            <ArrowLeftShort size={32} />
            <p className='m-0'>Previous</p>
        </Stack>
      </Pagination.Prev>
      <div className='d-flex'>
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{8}</Pagination.Item>
        <Pagination.Item>{9}</Pagination.Item>
        <Pagination.Item>{10}</Pagination.Item>
      </div>
      <Pagination.Next >
        <Stack direction='horizontal' className='justify-content-center'>
            <p className='m-0'>Next</p>
            <ArrowRightShort size={32} />
        </Stack>
      </Pagination.Next>
    </Pagination>
  );
}
