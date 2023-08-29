import React from 'react'

export default function Line({ mt, mb, color }) {
  return (
    <hr style={{ marginTop: `${mt||0}rem`, marginBottom: `${mb||0}rem`, width: '100%', border: `1px solid ${color}`, opacity: 1}} />
  )
}
