<?php
namespace App\Logs;

use App\Logs\Log;


class SignInLog extends Log
{
    protected $userAgent;

    public function __construct($user, $action, $api, $userAgent)
    {
        parent::__construct($user, $action, $api);
        $this->userAgent = $userAgent;
    }

    /**
     * [
     *  {type: "user", data: userId},
     *  {type: "key", data: "log.user.signin"}
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
                'data' => 'log.user.signin',
            ],
            [
                'type' => "contant",
                "value" => $this->userAgent
            ]
        ]);
    }
}
