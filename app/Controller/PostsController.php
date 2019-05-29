<?php 
class PostsController extends AppController {
	
	public function index() {
		$posts = $this->Post->find('all',array('order' => array('Post.created DESC')));
		$avatarCurrentUser = $this->Auth->user('avatar');
		$title = 'Timeline';
		$this->set(compact('title','posts','avatarCurrentUser'));
	}
} 