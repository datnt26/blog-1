<?php 
class PostsController extends AppController {
	
	public function index() {
		$posts = $this->Post->find('all',array('order' => array('Post.created DESC')));
		$avatarCurrentUser = $this->Auth->user('avatar');
		$title = 'Timeline';
		$this->set(compact('title','posts','avatarCurrentUser'));
	}
	// create post use ajax jquery
	public function create() {
		$this->layout = false;
		$this->autoRender = false;	

		if ($this->request->is('Ajax')) {
			$data = $this->request->data;
			if (!$data['content']) return;
			$data['user_id'] = $this->Auth->user('id');
			if ($this->Post->save($data)) {
				$insertedId = $this->Post->getLastInsertId();
				$post = $this->Post->find('first', array('conditions' => array('Post.id' => $insertedId)));
				return json_encode($post);
			}
		}
	}
} 