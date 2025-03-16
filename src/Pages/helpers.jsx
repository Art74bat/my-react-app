

// Вспомогательная функция для вывода СПИСКА пользователей

export function renderPriceList (prices) {
  // длина обьекта))
  const length = Object.keys(prices)

    if (!prices || length.lenght === 0) {
      return <p className="error">No data found.</p>; // Если ничего нет, выводим сообщение
    }

    return (
      <div>
        <h1>Price list</h1>
      {
      <ul>
      {Object.entries(prices).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value.map((item,index)=>{
              return <p key={index}>{item.description}</p>
            })}
          </li>
        ))}
        </ul>
      }
      </div>
    );
  };
