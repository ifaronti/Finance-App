import axios from "axios";

type params = {
  avatar: string;
  name: string;
  amount: number;
  category: string;
  categoryId: number;
};

const url = process.env.NEXT_PUBLIC_URL;
export const addBill = async (body: params) => {
  try {
    await axios.post(`${url}/bills`, body, {
      headers: { authorization: `Booyaba ${localStorage.getItem("token")}` },
    });
    
  } catch (err) {
    //@ts-expect-error any decalration still lints with red lines
    console.log(err.message);
  }
};

export const deleteBill = async (id: number) => {
  try {
    await axios.delete(`${url}/bills?id=${id}`, {
      headers: { authorization: `Booyaba ${localStorage.getItem("token")}` },
    });
      
  } catch (err) {
    //@ts-expect-error any decalration still lints with red lines
    console.log(err.message);
  }
};
