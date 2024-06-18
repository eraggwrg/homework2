export const BasketItem = ({ title, price, count, handleAdd, id, handleUnAdd, handleDelete, subtotal  }) => {
    return <tr>
        <td>{title}</td>
        <td>{price}$</td>
        <td>{count}</td>
        <td>{subtotal}$</td>
        <td>
            <button onClick={() => handleAdd(id)} >+</button>
            <button onClick={() => handleUnAdd(id)}>-</button>
            <button onClick={() => handleDelete(id)}>x</button>
        </td>
    </tr>

}