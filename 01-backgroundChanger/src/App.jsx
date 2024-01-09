import './App.css'
import Card1 from './Component/Card1'
import Card from './Component/Card'
import Backgroundchanger from './Component/Backgroundchanger'

function App() {
 
 return (
    <>
     <div className='max-auto grid place-items-center rounded-md'>
       <h1 className='bg-green-300 p-4 rounded-md'>Welcome to the PW SKill Card Section</h1>
       <div className='p-5 flex flex-wrap justify-center items-center gap-5'>
          {/* <Card1 name="Mackbook" btnText="View More"  />
          <Card1 name="Samsung" btnText="View"/>
          <Card1 name="Apple" btnText="View More"/>
         <Card></Card> */}
         <Backgroundchanger/>
          <Card1 name="Asus Mackbook" btnText="View More"/>
          <Card1 name="Samsung Mackbook" btnText="View More" />
      </div>

      </div>
   
    </>
  )
}

export default App;
