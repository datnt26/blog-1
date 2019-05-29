<?php
class Post extends AppModel {
	public $belongsTo = array(
						'User' => array(
									'className' => 'User',
									'foreignKey' => 'user_id',
								)
						);
	// get all comment of post
	public function afterFind($result, $primary = false) {
		foreach($result as $key => $value) {
			$result[$key]['Comment'] = $this->requestAction('/comments/getAllComment/' . $value['Post']['id']);
		}
		return $result;
	}
}