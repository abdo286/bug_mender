# BugMender - Bug Tracking Platform

**Table of Contents**
- [Introduction](#introduction)
- [Roles](#roles)
- [Projects](#projects)
- [Tickets](#tickets)
- [User Profiles](#user-profiles)
- [Design and Responsiveness](#design-and-responsiveness)
- [Notifications](#notifications)

## Introduction

bugMender is a comprehensive bug tracking platform built with ReactJS, Supabase, and TailwindCSS. It provides an organized and efficient way for companies to manage their projects, developers, and tickets.

## Roles

### Admin
- The Admin has the highest authority on the platform.
- Admins can create and manage projects.
- They have the ability to assign Project Managers and Developers to projects.
- Admins can also reassign Project Managers and Developers.

### Project Manager
- Project Managers have control over specific projects assigned by Admins.
- They can assign or remove Developers to projects.
- Project Managers can create and manage tickets within their assigned projects.

### Developer
- Developers are assigned to specific projects.
- They can view all tickets within their projects.
- Developers can update tickets they are assigned to but cannot remove them.

### Users
- Users can create and manage tickets within the projects they are added to.
- They have limited control over the tickets, primarily for updates and removal.
- Users can create and manage their profiles.

## Projects

- Each project has properties like creation date, last update date, deadline, name, description, and the list of assigned developers.
- Only Admins can create projects.
- Project Managers can manage the developer assignments within their projects.

## Tickets

- Tickets are used to track specific issues.
- They have properties such as status, priority, name, description, assigned developer, creation date, and last update date.
- Users can create and update tickets within their assigned projects.
- Project Managers have control over ticket assignments and can make changes as needed.
- Admins have full control over all tickets.

## User Profiles

- Every user has a profile where they can upload a profile picture, write an "about me" section, and provide personal information such as name, last name, and country.

## Design and Responsiveness

- The platform is responsive and designed for a user-friendly experience.
- It includes charts and statistics to provide insights into the entire project.

## Notifications

- Users, Project Managers, and Developers receive notifications when they are added or removed from a project.
- Notifications keep all users informed of important updates within the platform.

bugMender is designed to streamline bug tracking and project management, ensuring effective collaboration and communication among team members.


![Login Page](https://github.com/abdo286/bug_mender/assets/123945345/88f21056-c864-4815-ad3a-b9ddb087f8ed)
![Screenshot from 2023-10-29 19-04-47](https://github.com/abdo286/bug_mender/assets/123945345/34d39dd3-ec6c-4bae-846d-5cac84853749)
![Screenshot from 2023-10-29 19-05-00](https://github.com/abdo286/bug_mender/assets/123945345/4019689d-a89d-457b-90dd-bc8fa52e0f38)
![Screenshot from 2023-10-29 19-05-13](https://github.com/abdo286/bug_mender/assets/123945345/309d42db-49ff-4e20-a408-b8d69931724b)
![Screenshot from 2023-10-29 19-05-44](https://github.com/abdo286/bug_mender/assets/123945345/d8d78709-9c71-40e2-b652-188849332328)
![Screenshot from 2023-10-29 19-07-01](https://github.com/abdo286/bug_mender/assets/123945345/6e3ee8fa-7bb9-4aa6-9393-b6d4586fbfa2)
![Screenshot from 2023-10-29 19-07-06](https://github.com/abdo286/bug_mender/assets/123945345/f45270c5-57bb-42e9-a15e-2cc0b329730c)
![Screenshot from 2023-10-29 19-07-13](https://github.com/abdo286/bug_mender/assets/123945345/1b07c8ef-91d2-412f-9ec3-e09754991edb)
![Screenshot from 2023-10-29 19-14-00](https://github.com/abdo286/bug_mender/assets/123945345/f45bc114-de87-41b0-ac79-6f20325ed38a)
![Screenshot from 2023-10-29 19-14-04](https://github.com/abdo286/bug_mender/assets/123945345/bc488fd6-858e-42ce-8fa1-66a919d9b618)
![Screenshot from 2023-10-29 19-17-10](https://github.com/abdo286/bug_mender/assets/123945345/0605a04a-c1d2-4028-a83b-2ed6c5a6d46d)
![Screenshot from 2023-10-29 19-17-13](https://github.com/abdo286/bug_mender/assets/123945345/e744c41e-89a1-4db7-b144-2575302f7bef)
![Screenshot from 2023-10-29 19-17-22](https://github.com/abdo286/bug_mender/assets/123945345/41c169fc-7dfa-46f0-86e7-ab6001036fcd)
![Screenshot from 2023-10-29 19-17-52](https://github.com/abdo286/bug_mender/assets/123945345/86d15483-9b84-4852-8ad3-8f595d2638e2)
![Screenshot from 2023-10-29 19-17-56](https://github.com/abdo286/bug_mender/assets/123945345/44bdbf00-1561-4eac-b8ec-991a9010adf5)
![Screenshot from 2023-10-29 19-18-25](https://github.com/abdo286/bug_mender/assets/123945345/90bbc3d1-d4e0-455e-919e-60338df6876a)
![Screenshot from 2023-10-29 19-29-35](https://github.com/abdo286/bug_mender/assets/123945345/140b663c-bd69-4743-b06c-98f179f5ebee)
![Screenshot from 2023-10-29 19-30-01](https://github.com/abdo286/bug_mender/assets/123945345/d41e8e21-512c-4c67-8f2f-c89a92858b04)
![Screenshot from 2023-10-29 19-30-10](https://github.com/abdo286/bug_mender/assets/123945345/5821da13-7fee-4a5c-8cde-c9db2d1e8bd4)
![Screenshot from 2023-10-29 19-30-23](https://github.com/abdo286/bug_mender/assets/123945345/78a7a49a-1a4b-4384-bc4c-d3fa7989144c)
![Screenshot from 2023-10-29 19-30-31](https://github.com/abdo286/bug_mender/assets/123945345/5af72293-3b56-4821-a780-8b697d939421)
![Screenshot from 2023-10-29 19-30-49](https://github.com/abdo286/bug_mender/assets/123945345/6a493bf2-df09-4af7-9a43-07e5e2dd388c)
![Screenshot from 2023-10-29 19-30-54](https://github.com/abdo286/bug_mender/assets/123945345/88c5b5c4-db5c-4196-a48f-16fe0e1416c2)
