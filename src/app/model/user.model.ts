import { mock } from 'node:test';

interface user {
  accountType: boolean;
  address: string;
  email: string;
  fullName: string;
  id: number;
  phoneNumber: string;
}
interface createDTOs {
  id: number;
  userName: string;
  email: string;
  password: string;
  phone: string;
  fullName: string;
  address: string;
}

class _userModel {
  static newUser(): user {
    return {
      accountType: false,
      address: '',
      email: '',
      fullName: '',
      id: 0,
      phoneNumber: '',
    };
  }
  static create(model: any): createDTOs {
    return {
      id: 0,
      userName: model.username,
      email: model.email,
      password: model.password,
      phone: model.phone,
      fullName: model.fullname,
      address: model.address,
    };
  }
}

export { user, _userModel, createDTOs };
