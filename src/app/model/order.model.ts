import { cartLocal } from '../Shared/Cart.shared';

interface orderItem {
  idProduct: number;
  quantity: number;
}

interface order {
  idAccount: number;
  totalAmount: number;
  orderItems: orderItem[];
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
export { order, _orderModel };
