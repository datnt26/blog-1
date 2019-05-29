<?php 
class CommentsController extends AppController {
	// get all comment of post
	public function getAllComment($postId = null) {
		if ($postId) {
			$comments = $this->Comment->find('threaded', array('conditions' => array('postId' => $postId)));
			$comments = array_map(array($this,'formatComment'), $comments);
			return $comments;
		}
	}

	public function formatComment($comment) {
		$subComment = array();
		if ($comment['children']) {
			$subComment = array_map(array($this,'formatComment'), $comment['children']);
		}
		$comment['Comment']['username'] = $comment['User']['username'];
		$comment['Comment']['avatar'] = $comment['User']['avatar'];
		$comment = $comment['Comment'];
		$comment['subComment'] = $subComment;
		unset($comment['Comment'],$comment['User']);
		return $comment;
	}
    // create new comment use ajax jquery
	public function addComment() {
		$this->layout = false;
		$this->autoRender = false;	

		if ($this->request->is('Ajax')) {
			$data = $this->request->data;
			if (!$data['message']) return;
			$data['userId'] = $this->Auth->user('id');
			if ($this->Comment->save($data)) {
				$insertedId = $this->Comment->getLastInsertId();
				$comment = $this->Comment->find('threaded', array('conditions' => array('Comment.id' => $insertedId)));
				$comment = array_map(array($this,'formatComment'), $comment);
				return json_encode($comment);
			}
		}
	}
}