<?php

namespace App\Repositories;

use App\Notification;

class NotificationRepository extends Repository implements NotificationRepositoryInterface
{
    public function __construct()
    {
        parent::__construct(new Notification());
    }

    public function countUnseenUserNotification($userId)
    {
        return Notification::where("receiver_id", $userId)
            ->where("status", "unseen")->count();
    }

    public function findNotificationByReceiverIdPaginate($userId, $order = "desc", $limit = 20)
    {
        if ($order == null) {
            $order = "desc";
        }
        if ($limit == null) {
            $limit = 20;
        }
        return Notification::where("receiver_id", $userId)
            ->orderBy("created_at", $order)->paginate($limit);
    }

    public function findNotificationByReceiverIdAndMerchantIdPaginate($userId, $merchantId, $order = "desc", $limit = 20)
    {
        if ($order == null) {
            $order = "desc";
        }
        if ($limit == null) {
            $limit = 20;
        }
        return Notification::where("receiver_id", $userId)
            ->where("merchant_id", $merchantId)
            ->orderBy("created_at", $order)->paginate($limit);
    }
}
