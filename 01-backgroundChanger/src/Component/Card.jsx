function Card() {
  return (
    <div className="flex justify-center max-h-max p-5">
      
      <div className="flex flex-col justify-center content-center w-1/2 rounded-md border-2 border-blue-500">
        <h1 className="bg-blue-200 p-5 text-center text-2xl font-serif font-bold ">Full Stack Web Deveploment</h1>
        <img
          className='overfolw-hidden '
          src="https://cdn.pwskills.com/assets/uploads/thumbnails/63a2ecdd88994300d47eb9ad.png" alt='courseImage' />
        <h1 className="bg-blue-200 p-5 text-center text-base font-serif font-bold">Mentor Name : Hitesh Chaudhary, Vishva Mohan, Anuraj Tiwari</h1>
      </div>

     
    </div>
  )
}
export default Card;