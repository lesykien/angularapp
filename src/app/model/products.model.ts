interface products {
  color: string;
  description: string;
  hair: string;
  id: number;
  categoryId: number;
  isPrimary: boolean;
  link: string[];
  name: string;
  nameCategory: string;
  popular: string;
  price: number;
  sex: boolean;
  size: string;
  statusHair: string;
}
interface productsDetal {
  name: string;
  price: number;
  id: number;
  status: string;
  stock: number;
  hair: string;
  categoryId: number;
  description: string;
  statusHair: string;
  popular: string;
  size: string;
  sex: boolean;
  color: string;
  link: productsLink[];
}
interface productsLink {
  link: string;
}

class _productsModel {
  static CreateProdycts(item: productsDetal): products {
    return {
      color: item.color,
      description: item.description,
      hair: item.hair,
      id: item.id,
      categoryId: item.categoryId,
      isPrimary: true,
      link: [],
      name: item.name,
      nameCategory: '',
      popular: '',
      price: item.price,
      sex: item.sex,
      size: item.size,
      statusHair: item.statusHair,
    };
  }
}

export { products, productsDetal, _productsModel };
