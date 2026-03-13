export const getTransactionsHandler = (req, res) => {
  res.end('transactions endpoint');
};
export const postTransactionsHandler = (req, res) => {
  res.end('Create transaction endpoint');
};
export const deleteTransactionsByIdHandler = (req, res) => {
  const { transactionId } = req.params;
  res.end(`Delete transaction with ID: ${transactionId}`);
};
export const getTransactionsByIdHandler = (req, res) => {
  const { transactionId } = req.params;
  res.end(`Transaction with ID: ${transactionId}`);
};
export const putTransactionsByIdHandler = (req, res) => {
  const { transactionId } = req.params;
  res.end(`Update transaction with ID: ${transactionId}`);
};
