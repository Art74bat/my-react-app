

// Вспомогательная функция для вывода СПИСКА пользователей
  
export function renderPriceList (prices) {
  // объект в массив...
  const entriesArray = Object.entries(prices);
  if (!prices || prices.lenght === 0) {
    return <p className="error">No data found.</p>; // Если ничего нет, выводим сообщение
  }

    return (
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
    );
  };
