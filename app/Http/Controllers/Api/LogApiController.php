<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Resources\User as UserResource;
use App\Http\Controllers\ApiController;
use App\Repositories\LogRepository;

class LogApiController extends ApiController
{

    protected $logRepo;

    public function __construct(LogRepository $logRepo) {
        parent::__construct();
        $this->logRepo = $logRepo;
    }

    /**
     * Return logs of current logged in user
     * GET /api/v1/log
     * @return view
     */
    public function myLogs(Request $request)
    {
        $user = $request->user();
        if ($request->limit) {
            $limit = $request->limit;
        } else {
            $limit = 20;
        }
        $logs = $this->logRepo->findLogsByUserId($user->id, $limit);
        return $logs;
    }
}
