<?php
class Comment extends AppModel {
	public $actsAs = array('Containable');
	public $belongsTo = array(
						'User' => array(
									'className' => 'User',
									'foreignKey' => 'userId'
								)
						);
}