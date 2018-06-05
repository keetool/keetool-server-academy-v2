<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Resources\Language as LanguageResource;
use App\Http\Controllers\ApiController;
use App\Language;

class LanguageApiController extends ApiController
{
    /**
     * GET /api/v1/languages
     * @method GET
     * @return view
     */
    public function language($code, $version)
    {
        $language = Language::where("codes", "like", "%" . $code . "%")->first();
        if ($version == $language->version) {
            return $this->notModified();
        } else {
            return new LanguageResource($language);
        }

    }
}