import React from 'react'

export default function MainContainer({children}) {
  return (
    <section className=' w-full flex items-center flex-col px-[60px] py-[40px]'>
      {children}
    </section>
  )
}
