System.register([], function (_export) {
    'use strict';

    var Channel;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            Channel = (function () {
                function Channel() {
                    _classCallCheck(this, Channel);
                }

                Channel.prototype.send = function send() {};

                Channel.prototype.request = function request(method, params) {};

                return Channel;
            })();

            _export('Channel', Channel);

            Channel.REST = 'rest';
            Channel.STOMP = 'stomp';

            Channel.METHOD = {
                GET: 'GET',
                CREATE: 'CREATE',
                UPDATE: 'UPDATE',
                DELETE: 'DELETE',
                EXECUTE: 'EXECUTE'
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlLnNlY3VjYXJkLmNvbm5lY3QvbmV0L2NoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBV2EsT0FBTzs7Ozs7OztBQUFQLG1CQUFPO0FBRUwseUJBRkYsT0FBTyxHQUVGOzBDQUZMLE9BQU87aUJBSWY7O0FBSlEsdUJBQU8sV0FNaEIsSUFBSSxHQUFBLGdCQUFHLEVBRU47O0FBUlEsdUJBQU8sV0FVaEIsT0FBTyxHQUFBLGlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFHdkI7O3VCQWJRLE9BQU87OzsrQkFBUCxPQUFPOztBQWlCcEIsbUJBQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ3RCLG1CQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQzs7QUFFeEIsbUJBQU8sQ0FBQyxNQUFNLEdBQUc7QUFDYixtQkFBRyxFQUFFLEtBQUs7QUFDVixzQkFBTSxFQUFFLFFBQVE7QUFDaEIsc0JBQU0sRUFBRSxRQUFRO0FBQ2hCLHNCQUFNLEVBQUUsUUFBUTtBQUNoQix1QkFBTyxFQUFFLFNBQVM7YUFDckIsQ0FBQyIsImZpbGUiOiJkZS5zZWN1Y2FyZC5jb25uZWN0L25ldC9jaGFubmVsLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==