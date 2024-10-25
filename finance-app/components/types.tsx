import { Dispatch, SetStateAction } from "react";

export type inputEvent = React.ChangeEvent<HTMLInputElement>;
export type formEvent = React.FormEvent<HTMLFormElement>;
export type userInfo = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type formProps = {
  handleSubmit: (e: formEvent) => void;
  handleChange: (e: inputEvent) => void;
  handleBlur: (e: inputEvent) => void;
  togglePasswordState: () => void;
  showPassword?: boolean;
  userInfo: userInfo;
  signUp: boolean;
  err: userInfo & { all?: string };
};

export type toggleProps = { showBar: boolean; toggle: () => void };

export type barContext = {
  showBar: boolean;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export type detailsLink = {
  location: string;
  text: string;
};

export type transaction = {
  amount: number;
  avatar: string;
  categoryId?: number;
  category?: string;
  date: string;
  name: string;
  recurring?: boolean;
  userId?: number;
  transactionId?: number;
  type?: string;
};

export type budget = {
  category: string;
  maximum: number;
  theme: string;
  spent: number;
  categoryId: number;
  userId?: number;
  budgetId?: number;
  date?: string;
  category_relate?: {
    category?: string;
    transactions: transaction[];
  };
};

export type bill = {
  amount: number;
  avatar: string;
  categoryId: number;
  category: string;
  updatedAt?: string;
  createdAt:string
  name: string;
  recurring?: boolean;
  userId?: number;
  BillId:number
}

export type pot = {
  name: string;
  target: number;
  total: number;
  theme: string;
  potId?: number;
};

export type buttonEvent = React.SyntheticEvent<HTMLButtonElement>;

export type potModal = {
  add: boolean;
  edit: boolean;
  delete: boolean;
  addMoney: boolean;
  Withdraw: boolean;
};

type categories = {
  Education: number;
  Bills: number;
  Groceries: number;
  "Dining Out": number;
  Transportation: number;
  "Personal Care": number;
  General: number;
  Lifestyle: number;
  Shopping: number;
  Entertainment: number;
};

export const categories: categories = {
  Education: 1,
  Bills: 2,
  Groceries: 3,
  "Dining Out": 4,
  Transportation: 5,
  "Personal Care": 6,
  General: 7,
  Lifestyle: 8,
  Shopping: 9,
  Entertainment: 10,
};
