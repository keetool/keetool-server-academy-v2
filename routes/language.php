<?php

/**
 * Begin routes edit languages
 */
Route::prefix("language")->group(function() {
    Route::get('list', 'LanguageController@listLanguages');
    Route::get('add', 'LanguageController@getAddLanguage');
    Route::post('/', 'LanguageController@postAddLanguage');

    Route::get('/{id}/edit','LanguageController@getEditLanguage');
    Route::get("/{id}", 'LanguageController@getLanguageDetail');

    Route::get("/{lang_id}/keyword","LanguageController@getKeywordAdd");
    Route::get("/{lang_id}/keyword/add","LanguageController@getKeywordAdd");
    Route::get("/{lang_id}/keyword/{keyword_id}","LanguageController@getKeywordEdit");
    Route::post("/{lang_id}/keyword","LanguageController@postKeyword");

});
