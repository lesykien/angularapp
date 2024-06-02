import { Observable } from 'rxjs';
import { cartLocal } from '../Shared/Cart.shared';
import { run } from 'node:test';

interface orderItem {
  idProduct: number;
  quantity: number;
}

interface order {
  idAccount: number;
  totalAmount: number;
  orderItems: orderItem[];
}

interface orderDTOs {
  id: number;
  total: number;
  time: string;
  statusDelivery: number;
  accountId: number;
}
interface orderItemDTOs {
  quantity: number;
  id: number;
  name: string;
  price: number;
}
interface orderSingle {
  id: number;
  accountId: number;
  total: number;
  statusDelivery: number;
  detal: orderItemDTOs[];
}
class _orderModel {
  static CreateItem(listItem: cartLocal[]): orderItem[] {
    let list: orderItem[] = [];
    listItem.forEach((item) => {
      let newItem: orderItem = {
        idProduct: item.id,
        quantity: item.quantity,
      };
      list.push(newItem);
    });
    return list;
  }

  static Amount(list: cartLocal[]): number {
    let amount: number = 0;
    list.forEach((item) => {
      amount += item.price * item.quantity;
    });
    return amount;
  }

  static CreateRequest(id: number, listItem: cartLocal[]): order {
    return {
      idAccount: id,
      totalAmount: this.Amount(listItem),
      orderItems: this.CreateItem(listItem),
    };
  }
}
export { order, _orderModel, orderDTOs, orderSingle };
