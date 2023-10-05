Tech
Libraries:

1.  State Management: Redux with ContextAPI
2.  Styling: TailwindCSS as the main Library. Also daisyUI will be used
3.  Forms: React Hook Form
4.  Date & Time: Date-fns
5.  Authentication: Supabase
6.  Remote Data: ReactQuery
7.  Routing: React Router DOM
8.  ANIMATION: Framer Motion and react-spring
9.  Charts: : Recharts
10. RICH TEXT EDITOR: Draft.js or Slate.js
11. FILE UPLOAD: FILE UPLOAD or filepond

Tips

1. Memorize Syntax
2. During Reading or Watching a Tutorial an Article Practice along
3. Take notes to save time during Revision
4. Build Projects
5. Read Others Code and see how they built it
6. Stay away from YouTube & Tutorials once you get the basics of the Technology otherwise, you will live in beginner stage for so long. Build Projects and Learning new stuff in the way, is one of the easiest way to get to the Intermadiate Level
7. Don't waste your time in building the stuff you know you can build it. Use Libraries for this. Invest your time in the challenging stuff
8. Read Others code and imitate them. Don't get me wrong, Trial & Error is great but it takes too much time. See how someone else did it and imitate him/her is one of the easiest way. Instead of creating your own style, imitate someone else 's style.

9. Landing Page for the Project is crucial and explain briefly how the project works
10. Demo Accounts are very crucial to the project

Tasks

1. Each use can create only and only one profile. Each profile should contains the the id of the user who is trying to access it. That could happen by default anyway
   use can create only one profile A user cannot delete his profile. User can update his profile. User can view his profile.

I need to know if the user did not for example click on the confirmation link, would they be able to login in or not.
If they would be able to do so then I should create the profile when the user signs up directly and send the request manually because
it seems using the Supabase client would not work. If the user would not be able to login then using then we could check during the login for some parameters and create the profile at that time or again use the manually approach for creating the profile.

هيجي منين عنصر الابداع و عمل حاجة جديدة بدون انك تشوف الجزئية دي في موقع او تقر مقالات او تسال تشات عن مييزات

You supposed to make sure the form data is formatted well before allowing the user to submit the form
"new " !== "new"

Include all css files of libraries in the App.jsx instead of repeating writing them.

When Writing components: Try to make them Interactive with the user. If the user deleted something, show them a message. If they were searching for something, show them a loader and so on

Always assume that fetching the data will fail and secure your components against that

Try to make the component as reusable as possible

Always follow divide and conquer before the project go bigger
Responsive per component or page
PropTypes
Validation against if the data not present
Interactivity

always look at the Console Panel and see if there are an errors or warnings - divide and conquer

In this code, we use semantic HTML elements to improve accessibility. We replace the `div` elements with `main`, `nav`, `section`, `article`, and `aside` elements to provide more meaning to the content.

The `main` element is used to indicate the main content of the page. The `nav` element is used to indicate a navigation section. The `section` element is used to group related content. The `article` element is used to indicate an independent, self-contained piece of content. The `aside` element is used to indicate content that is related to the main content but not part of it.

By using semantic HTML, we can improve the accessibility and SEO of the page.


// upload file logic should be in components global
// add created when uploading the data
// submitter
// assigned should be shown based on if the user is admin or project manager and assigned to assign project or not
// admins can only add projects - assigned project managers and add developers
// project managers can assign or remove developers only and they can do that only to the projects they were assigned to
// add the functionality of adding a project manager and a list of developers using react select to during adding the project
// add the functionality of adding attachments to the ticket during creating the ticket
// <section className="mt-3">
// <p className="label-text font-semibold">Attach File: </p>

// <div className="flex col gap-6 mt-3">
// <div>
// <input
// type="text"
// placeholder="Add Description"
// className="input input-bordered w-full max-w-xs"
// />
// </div>
// <div>
// <input
// type="file"
// multiple
// className="file-input file-input-bordered file-input-info w-full max-w-xs"
// />
// </div>
// </div>
// </section>;


// Status: New, Development, Resolved
// Priority: Hight, Medium, Low