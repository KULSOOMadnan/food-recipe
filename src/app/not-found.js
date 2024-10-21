import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function notfound() {
  return (
    <div >
        <h1 >page not Found</h1>
        <Link href='/' calssName="text-blue">Go to home page</Link>
    </div>
  )
}

export default notfound
