/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-29 20:10:26 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-29 20:13:05
 */
export const calculatePrice = items => {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)
  }`;
}
