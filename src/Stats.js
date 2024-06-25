function Stats ({items}) {

    if (!items.length)return (


        <p className='stats'>
            Start adding some items to your packing list ☕
        </p>
)



    const itemsNumber = items.length;
    const numberPacked = items.filter((item)=> item.packed).length;
    const perecentComplete = Math.round((  numberPacked / itemsNumber) * 100);

    return(
        <footer className='stats'>

                {perecentComplete === 100 ? 'You got everything! ready to go 🌍' :`you have ${itemsNumber} item on your list ,
              and you already packed ${numberPacked}(${perecentComplete}%)
          `  }



        </footer>
    )
}
export default Stats
