import React, { useEffect, useState } from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Pizza = () => {

    const [pizzasApiUnic, setPizzasApiUnic] = useState()
  
    useEffect(() => {
        userFetch()
    }, [])
    
  
    async function userFetch (){
      const response = await fetch ('http://localhost:5000/api/pizzas/p001')
      const pizzasApiUnic = await response.json()
  
      console.log(pizzasApiUnic)
      setPizzasApiUnic (pizzasApiUnic)
    }

    if (!pizzasApiUnic) {
        return <p>Cargando...</p>
    }
  
    return (
      <div >
        <div>
          <Header/> 
        </div>
  
  
          <div className='grilla'>
          
            <CardPizza pizza={pizzasApiUnic} />
               
  
          </div>
      </div>
    )
  }

export default Pizza