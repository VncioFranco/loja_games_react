import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



function NavBar() {
    let navigate = useNavigate();

    const [searchTerm,setSearchTerm] = useState('');
    const handleSearchChange = (event:any) =>{
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
       
        console.log("Pesquisando por:", searchTerm);
      };
  return (
    <>
    
    <div className='w-full bg-[#5F506B] text-white flex justify-center py-4'>
    
      <div className="container flex justify-between text-lg">  
      <Link to='/home' className='text-2xl font-bold uppercase'>Loja de Games</Link>
     
      
    </div>
    <div className='flex container'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Pesquisar</button>
      </form>
      </div>
      <div className='flex gap-4 m-2' >
        <Link to='/home' className='hover:underline'>Home</Link>
        <Link to='/produtos' className='hover:underline'>Produtos</Link>
        <Link to='/categorias' className='hover:underline'>Categorias</Link>
        <Link to='/cadastrar' className='hover:underline'>Cadastrar</Link>
      </div>
    </div>
    </>
  );
  
}

export default NavBar