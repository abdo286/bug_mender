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
