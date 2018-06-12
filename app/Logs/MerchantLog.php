<?php
namespace App\Logs;

use App\Logs\Log;


class MerchantLog extends Log
{
    public $merchant;

    public function __construct($user, $merchant, $action, $api)
    {
        parent::__construct($user, $action, $api);
        $this->merchant = $merchant;
    }

    /**log
     * [
     *  {type: "user", data: userId},
     *  {type: "key", data: "log.merchant.create"}
     *  {type: "merchant", data: merchantId}
     * ]
     */
    protected function format()
    {
        return json_encode([
            [
                'type' => 'user',
                'data' => $this->user->id,
            ],
            [
                'type' => 'key',
                'data' => 'log.merchant.create',
            ],
            [
                'type' => 'merchant',
                'data' => $this->merchant->id,
            ]
        ]);
    }
}