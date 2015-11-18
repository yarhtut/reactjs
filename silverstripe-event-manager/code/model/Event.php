<?php
/**
 * Created by PhpStorm.
 * User: yhtut
 * Date: 13/11/15
 * Time: 1:15 PM
 */


class Event extends DataObject {

    private static $db = array(
        'Title' => 'Varchar',
        'Description' => 'Text',
        'Date' => 'Date',
        'Spam' => 'Varchar',
        'Moderated' => 'Varchar',
    );

    private static $has_one = array(
        'EventManagerPage' => 'EventManagerPage'
    );

    public function onAfterWrite(){
      parent::onAfterWrite();

      $this->EventManagerPage()->updateEventCache();

    }
}
