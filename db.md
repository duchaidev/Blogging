# Post

- id
- title
- slug
- image
- createdAt
- hot(true or false)
- content
- userId
- user: id, username, fullname, avatar, description
- categoryId
- category: id, name, slug

# Category

- id
- name
- slug
- createdAt

# User

- id
- displayName
- username
- email
- password
- avatar: url, image_name
- status: 1(active) 2(pending) 3(ban)
- role: 1(Admin) 2(Mod) 3(User)
- permissions: "ADD_POST"
- createdAt
