Project.create(title: 'Test Project', description: 'Testing description', tag: 'Ruby Rails')

Paragraph.create(project_id: 1, content: 'test content', title: 'Test Project')

User.create(username: 'admin', password: 'admin')
