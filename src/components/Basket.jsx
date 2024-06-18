import { BasketItem } from "./BasketItem"
export const Basket = ({ items, handleAdd, handleUnAdd, handleDelete, total }) => {
    return <div>
        <h3>Basket </h3>

        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    items.map(elm => <BasketItem key={elm.id} {...elm}
                        handleAdd={handleAdd}
                        handleUnAdd={handleUnAdd}
                        handleDelete={handleDelete}
                    />)
                }
            </tbody>

        </table>
        <strong>Total:{total}$</strong>
    </div>

}