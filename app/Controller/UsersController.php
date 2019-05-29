<?php
App::uses('AppController', 'Controller');
/**
 * Users Controller
 *
 * @property User $User
 * @property PaginatorComponent $Paginator
 */
class UsersController extends AppController {
  
	public function login() {
        if ($this->Auth->login()) {
        	$user_info = AuthComponent::user();
        	$this->Session->write('user_info',$user_info);
            $this->redirect('/posts/index');
        }
    }

    public function logout() {
    	if ($this->Session->check('user_info')) {
    		$this->Session->delete('user_info');
    	}  	
    	$this->redirect($this->Auth->logout());
    }

	public function register() {
		if ($this->request->is('post')) {
			$this->log($this->request);
			$this->User->create();
			if ($this->User->save($this->request->data)) {
				return $this->redirect('/users/login');
			}
		}
	}
}
