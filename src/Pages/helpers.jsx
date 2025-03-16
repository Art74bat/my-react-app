

// Вспомогательная функция для вывода СПИСКА пользователей

// export function renderPriceList (prices) {
//   // длина обьекта))
//   const length = Object.keys(prices)

//     if (!prices || length.lenght === 0) {
//       return <p className="error">No data found.</p>; // Если ничего нет, выводим сообщение
//     }

//     return (
//       <div>
//         <h1>Price list</h1>
//       { 
//         <ul>
//           {
//             // создать массив с парами ключ-значение
//             Object.entries(prices).map(([key, value]) => (
//               <li key={key}>
//                 <strong>{key}:</strong> {value.map((item,index)=>{
//                   return <p key={index}>{item.description}</p>
//                 })}
//               </li>
//             ))
//           }
//         </ul>
//       }
//       </div>
//     );
//   };

  
export function renderPriceList (prices) {
  // объект в массив...
  const entriesArray = Object.entries(prices);
  if (!prices || prices.lenght === 0) {
    return <p className="error">No data found.</p>; // Если ничего нет, выводим сообщение
  }
  // const out = getType(entriesArray)

  // entriesArray.map(items=>{
  //     console.log(items[0])
  //     items[1].map(item=>{
  //         console.log(item.id)
  //     })
  // })

    return (
      <div>
        <h1>Price list</h1>
      { 
        <ul>
          {
            // создать массив с парами ключ-значение
              entriesArray.map((items,index) => (
              <li key={index}>
                <strong>{items[0]}:</strong> 
                {items[1].map((item)=>{
                  return <p key={item.id}>{item.id} {item.description}</p>
                })}
              </li>
            ))
          }
        </ul>
      }
      </div>
    );
  };
