first value is default

### Inventory
- id: Int 
- title: String - is missing?
- origin: String?
- legalStatus
    - loan
    - protospace
    - TBD
- type: []
  - make an array
  - merge with "categories"?
- permissions: []
  - members
  - probationary
  - guests
  - all
- certification: []
  - "demo" means there is a missing class
- certified: User[] 
- status
  - TBD
  - working
  - needs-help
  - missing
  - removed
- maintenance: Tasks[]
- arrivedAt: Date || now

### Location
- id
- name
- type
  - room
  - area

### User
- id
- name

### Task
- id
- type
  - fix
- name
- description