import React from 'react'

const Video = () => {
  return (
    <div className='w-full flex flex-col gap-[3rem] pb-[5rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">VIDE0</h1>
      <p className="text-[1.25rem] mx-auto">Launching of the StarShip</p>
      <iframe
        src='https://www.youtube.com/embed/C3iHAgwIYtI'
        title='StarSHIP Launch'
        allow='accelerometer; gyroscope;'
        allowFullScreen
        className='mx-auto max-w-[40rem] w-[90%] h-screen max-h-[25rem]'
      ></iframe>
    </div>
  )
}

export default Video