<?php
/**
 * Created by PhpStorm.
 * User: yhtut
 * Date: 13/11/15
 * Time: 1:11 PM
 */

class EventManagerPage extends Page {

    private static $has_many = array(
        'Events' => 'Event'
    );

    public function getEventJson(){
        $cache = SS_Cache::factory('EventManagerPage_Events');

        if(!($json = $cache->load($this->ID))){
          $json = $this->updateEventCache();
        }

        return $json;
    }

    public function updateEventCache(){
        $cache = SS_Cache::factory('EventManagerPage_Events');
        //generate json
        $json = $this->generateEventJson();

        $cache->save($json, $this->ID);

    }

    //generate
    public function generateEventJson(){

      $data = array(
          'events' => array()
      );
      $event_filter = Event::get()->filter(array(
        'Moderated' => 1,
        'Spam'=> 0,
        
      ));
      //loop throught the Events data from here
      foreach($event_filter as  $event){

          //push to array
          array_push( $data['events'], array(
              'title' => $event->Title,
              'date' => $event->Date,
              'description' => $event->Description,
              'spam' => $event->Spam,
              'delete'=> $event->Delete,
          )
          );

      }
      return json_encode($data);

    }

    public function onAfterWrite(){

       parent::onAfterWrite();
       $this->updateEventCache();


    }

    public function getCMSFields() {
        $fields = parent::getCMSFields();

        $config = GridFieldConfig_RelationEditor::create();

        $config
            ->getComponentByType('GridFieldDataColumns')
            ->setDisplayFields(array(
                'Title' => 'Title',
                'Date'=> 'Date',
                'Description' => 'Description',
            ));

        $eventsField = new GridField('Events', 'Events', $this->Events(), $config);

        $fields->addFieldToTab('Root.Events', $eventsField);

        return $fields;
    }
}

class EventManagerPage_Controller extends Page_Controller {

    public function init() {
        parent::init();

        Requirements::javascript(SILVERSTRIPE_EVENT_MODULE_DIR . '/javascript/dist/bundle.js');
        Requirements::Css('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css');

    }

    private static $allowed_actions = array(
        'fetch'
    );

    public function fetch(SS_HTTPRequest $request) {

        //create the array with object array


        /*$this->response->setBody(json_encode(array(
            'json' => true
        )));*/
        $json = $this->getEventJson();

        $this->response->setBody($json);

        $this->response->addHeader('Content-type', 'application/json');

        return $this->response;
    }

    public function getFetchEndpoint(){
        return $this->Link() . 'fetch';
    }




}
