export function usePaymentComposable() {
  function doPayment() {
    console.log('Payment done')
  }
  return { doPayment }
}
