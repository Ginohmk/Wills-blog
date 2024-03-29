import os
from unicodedata import category
import unittest
import json
from flask_sqlalchemy import SQLAlchemy
import random
from flaskr import create_app
from models import setup_db, User, Category, Post


class WillsTestCase(unittest.TestCase):

  def setUp(self):
    self.app = create_app()
    self.client = self.app.test_client
    self.database_name= "wills_blog_test"
    self.database_path = "postgresql://{}:{}@{}/{}".format('mike-savy','dreamlife!','localhost:5432', self.database_name)
    setup_db(self.app, self.database_path)


    with self.app.app_context():
      self.db = SQLAlchemy()
      self.db.init_app(self.app)
      self.db.create_all()

  def tearDown(self):
    pass

  """
  Test
  """
  # def test_create_user(self):
  #   value = random.randint(0,30)
  #   res = self.client().post('/users', json={
  #     "first_name": "Sammy", 
  #     "last_name": "Lewis",
  #     "role": "user",
  #     "disable_account": False,
  #     "facebook_link": "https://me",
  #     "linkedIn_link":"https://me",
  #     "instagram_link":"https://",
  #     "github_link": "https://me",
  #     "nick_name": "lewisCreed{}".format(value)
  #     })

  #   data = json.loads(res.data)

  #   self.assertEqual(res.status_code, 200)
  #   self.assertEqual(data['success'], True)
  #   self.assertTrue(data['user'])

# Category Test
  def test_get_Categories(self):
    res = self.client().get('/categories')
    data = json.loads(res.data)

    self.assertEqual(res.status_code, 200)
    self.assertEqual(data['success'], True)

  def test_create_category(self):
    res = self.client().post('/categories', json= {"type":"Jokes"})
    data = json.loads(res.data)

    self.assertEqual(res.status_code, 200)
    self.assertEqual(data['type'],"Jokes")
    self.assertTrue(data['category_id'])
  
  def test_delete_category(self):
    res = self.client().delete('/categories/7')
    data = json.loads(res.data)

    category = Category.query.filter(Category.id == 7).one_or_none()

    self.assertEqual(category, None)
    self.assertEqual(data['message'], 'Id Not Found')

#  POST ENDPOINTS

  # CREATE Post
  def test_create_post(self):
    res = self.client().post('/posts', json = {
      "title": "Gregory",
      "content":"Ilorem Ipsum Ipsum Lorems LOresm Ipsum LOresm Ipsum LOresm Ipsum LOresm Ipsum",
      "category_id": 3,
      "like_count": 0
     })
    data = json.loads(res.data)

    self.assertEqual(res.status_code, 200)
    self.assertEqual(data['success'], True)

  # Get
  def test_get_posts(self):
    res = self.client().get('/posts')
    data = json.loads(res.data)

    self.assertEqual(res.status_code, 200)
    self.assertTrue(data['posts'])

  # GET exceed pagagination
  def test_404_pagination(self):
    res = self.client().get('/posts?page=2000')
    data = json.loads(res.data)

    self.assertEqual(data['success'], False)
    self.assertEqual(data['message'], 'Posts Page Limit Reached')

  # Delete
  def test_delete_post(self):
    res = self.client().delete('posts/3')

    post = Post.query.filter(Post.id == 3).one_or_none()

    self.assertEqual(post, None)

  
    



  


# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()