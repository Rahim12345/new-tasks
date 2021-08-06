<?php


namespace FSCODE;


class GetRectangles
{
    public $new_elements;

    public function __construct()
    {
        $db         = new DB();
        $regtangles = $db->Select('SELECT * FROM regtangles');

        $this->new_elements = '';
        if (count($regtangles) > 0)
        {
            foreach ($regtangles as $regtangle)
            {
                $this->new_elements .= '
            <div class="new-element" style="width: '.$regtangle['width'].'px;height: '.$regtangle['height'].'px;background-color: '.$regtangle['color'].';top:'.$regtangle['randomCoordinateY'].'px;left: '.$regtangle['randomCoordinateX'].'px" data-id="'.$regtangle['dataID'].'"></div>
            ';
            }
        }
        return $this->new_elements;
    }
}