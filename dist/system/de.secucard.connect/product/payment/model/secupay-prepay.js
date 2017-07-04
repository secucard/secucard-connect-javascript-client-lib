System.register(['./transaction'], function (_export) {
    'use strict';

    var Transaction, SecupayPrepay;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    return {
        setters: [function (_transaction) {
            Transaction = _transaction.Transaction;
        }],
        execute: function () {
            SecupayPrepay = (function (_Transaction) {
                function SecupayPrepay(transfer_purpose, transfer_account, customer, contract, amount, currency, purpose, order_id, trans_id, status, transaction_status) {
                    _classCallCheck(this, SecupayPrepay);

                    _Transaction.call(this, customer, contract, amount, currency, purpose, order_id, trans_id, status, transaction_status);
                    this.transfer_purpose = transfer_purpose;
                    this.transfer_account = transfer_account;
                }

                _inherits(SecupayPrepay, _Transaction);

                return SecupayPrepay;
            })(Transaction);

            _export('SecupayPrepay', SecupayPrepay);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlLnNlY3VjYXJkLmNvbm5lY3QvcHJvZHVjdC9wYXltZW50L21vZGVsL3NlY3VwYXktcHJlcGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztxQkFZYSxhQUFhOzs7Ozs7Ozt1Q0FEbEIsV0FBVzs7O0FBQ04seUJBQWE7QUFFWCx5QkFGRixhQUFhLENBRVYsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRTswQ0FGdEksYUFBYTs7QUFJbEIsNENBQU0sUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3JHLHdCQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDekMsd0JBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztpQkFFNUM7OzBCQVJRLGFBQWE7O3VCQUFiLGFBQWE7ZUFBUyxXQUFXOztxQ0FBakMsYUFBYSIsImZpbGUiOiJkZS5zZWN1Y2FyZC5jb25uZWN0L3Byb2R1Y3QvcGF5bWVudC9tb2RlbC9zZWN1cGF5LXByZXBheS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=