import {Board, OrdersContainer } from './styles';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { useState } from 'react';

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[]
}

export function OrdersBoard ({ icon, title, orders }: OrderBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null >(null);


  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
    console.log(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }


  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {orders.length > 0 && (<OrdersContainer>
        {orders.map((order) => (
          <button type='button' key='_id' onClick={() => handleOpenModal(order)}>
            <strong>Mesa {order.table} </strong>
            <span>{order.products.length} {order.products.length != 1 ? 'itens' : 'item'}</span>
          </button>
        ))}

      </OrdersContainer>
      )}
    </Board>
  );
}
