export const formatAmount = (amount: number) => {
  const amountStr = amount.toString().replace("-", "");
  const newFormat = amount.toString().includes("-")
    ? "-$" + Number(amountStr)
    : "+$" + amount;
  return newFormat;
};

export const formatDate = (date: string) => {
    const transactionDate = new Date(date);
  
    const day = transactionDate.getDate();
    const month = transactionDate.toLocaleString("en-us", { month: "long" });
    const year = transactionDate.getFullYear();

    return day +' '+month+' ' +year
  
};