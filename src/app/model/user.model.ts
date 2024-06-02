interface user {
  accountType: boolean;
  address: string;
  email: string;
  fullName: string;
  id: number;
  phoneNumber: string;
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
}

export { user, _userModel };
