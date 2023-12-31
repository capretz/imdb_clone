import React from 'react'
import Link from 'next/link'

export default function MenuItem({title, address, Icon} : {title:any, address:any, Icon:any}) {
  return (
    <div>
        <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
            <Icon className='text-2xl sm:hidden my-2 text-sm mx-4'/>
            <p className='hidden sm:inline'>{title}</p>
        </Link>
    </div>
  )
}
