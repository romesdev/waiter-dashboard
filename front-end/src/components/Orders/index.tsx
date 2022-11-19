import { Container } from './styles';
import { OrdersBoard } from '../OrdersBoard';
import type { Order } from '../../types/Order'

const orders: Order[] = [
  {
    '_id': '6374c658a6fa154fe3733be1',
    'table': '221',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'tomate',
          'imagePath': '1668699316536-quatro-queijos.png',
          'price': 24.59,
        },
        'quantity': 6,
        '_id': '6374c658a6fa154fe3733be2'
      },
      {
        'product': {
          'name': 'tomate',
          'imagePath': '1668699316536-quatro-queijos.png',
          'price': 24.59,
        },
        'quantity': 6,
        '_id': '6374c658a6fa154fe3733be2'
      }
    ],
  },
  {
    '_id': '63765541976516807a9477d8',
    'table': '221',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'tomate',
          'imagePath': '1668699316536-quatro-queijos.png',
          'price': 24.59,
        },
        'quantity': 6,
        '_id': '6374c658a6fa154fe3733be2'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="⌚"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
