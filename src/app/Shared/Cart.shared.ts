import { products } from '../model/products.model';

interface cartLocal {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

class _cart {
  static NewItemCart(item: products): cartLocal {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
  }

  static UdpateQuantity(item: cartLocal): cartLocal {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity + 1,
    };
  }

  static RemoveItem(list: cartLocal[], item: cartLocal) {
    const index: number = list.indexOf(item);
    list.splice(index, 1);
  }

  static AddToCartLocal(key: string, item: products) {
    let local: any = localStorage.getItem(key);
    let list: cartLocal[] = [];
    let newitem: cartLocal = this.NewItemCart(item);
    if (!local) {
      list.push(newitem);
      localStorage.setItem(key, JSON.stringify(list));
    } else {
      list = JSON.parse(local);
      const cartitem: cartLocal = list.find(
        (a) => a.id == item.id
      ) as cartLocal;
      if (cartitem) {
        let newCart = this.UdpateQuantity(cartitem);
        this.RemoveItem(list, cartitem);
        list.push(newCart);
        localStorage.setItem(key, JSON.stringify(list));
      } else {
        list.push(newitem);
        localStorage.setItem(key, JSON.stringify(list));
      }
    }
  }

  static LoadItemInCart(key: string): cartLocal[] {
    let list: cartLocal[] = [];
    let local: any = localStorage.getItem(key);
    if (local) {
      list = JSON.parse(local);
      return list;
    } else {
      return list;
    }
  }
}

export { cartLocal, _cart };
