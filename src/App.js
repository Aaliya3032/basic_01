import {useState} from 'react';


function App() {
 
  const [color,setColor] = useState('olive');

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
       <div className='flex flex-wrap justify-center gap-10 shadow-lg bg-white px-10 py-3 rounded-xl'>
       <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={() => setColor('red')} style={{backgroundColor:'red'}}>Red</button>
       <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={() => setColor('green')} style={{backgroundColor:'green'}}>Green</button>
       <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={() => setColor('blue')} style={{backgroundColor:'blue'}}>Blue</button>
       <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={() => setColor('pink')} style={{backgroundColor:'pink'}}>Pink</button>
       <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={() => setColor('lavender')} style={{backgroundColor:'lavender'}}>Lavender</button>
       <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={() => setColor('black')} style={{backgroundColor:'black'}}>Black</button>
       <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={() => setColor('orange')} style={{backgroundColor:'orange'}}>Orange</button>
       </div>
      </div>
    </div>
  );
}

export default App;