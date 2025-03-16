

// Вспомогательная функция для вывода СПИСКА пользователей
export function renderPriceList (prices) {
    if (!prices || prices.length === 0) {
      return <p className="error">No data found.</p>; // Если ничего нет, выводим сообщение
    }
  
    return (
      <ul>
        <li><strong>{prices[0].category}</strong></li>
        {prices.map(price => (
          <li key={price.id}>
            {price.description}- {price.price}
          </li>
        ))}
      </ul>
    );
  };
