<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT, OPTIONS');
  header("Access-Control-Max-Age: 3600");
  header('Access-Control-Allow-Headers: Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Headers');
  
  include_once '../../config/Database.php';
  include_once '../../models/Post.php';
  
  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();
  
  // Instantiate blog category object
  $post = new Post($db);
 
  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));

  //Set ID to UPDATE
  $post->id = $data->id;
  
  $post->title = $data->title;
  $post->body = $data->body;
  $post->author = $data->author;
  $post->category_id = $data->category_id;
  
  // Update post
  if($post->update()) {
    echo json_encode(
      array('message' => 'Post Updated')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Updated')
    );
  }
