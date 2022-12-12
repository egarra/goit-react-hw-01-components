import PropTypes from 'prop-types';
import '../css/TransactionHistory.css';

function TransactionHistory ({items}) {
    console.log(items)
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>

                {items.map(({id, type, amount, currency}) => {
                    return (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired
  }

export default TransactionHistory;