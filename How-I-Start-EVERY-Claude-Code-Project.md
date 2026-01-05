# How I Start EVERY Claude Code Project

## Video Information

**Title:** How I Start EVERY Claude Code Project
**Author:** AI with Avthar
**Duration:** 34 minutes
**Upload Date:** December 17, 2025
**URL:** https://www.youtube.com/watch?v=aQvpqlSiUIQ

## Description

I used to start my Claude Code projects completely wrong: just typing "claude" and freestyle prompting with no planning, no setup, and no system. It was like building a house without blueprints.

After building dozens of projects with Claude Code over the past year, I've discovered a simple three-part system that makes every project 10x easier to build from day one.

In this video, I'm sharing the exact PSB system (Plan, Setup, Build) that I use to start every new Claude Code project.

## What You'll Learn

### Phase 1 - Plan
- Two critical questions to ask before writing any code
- Creating a project spec doc (product + engineering requirements)
- Using AI to help you plan

### Phase 2 - Setup (7-Step Checklist)
- GitHub repo setup for web/mobile coding and issue-based dev
- Claude.md file configuration and what to put in it
- Documentation that keeps itself updated
- Plugins, MCPs, and custom slash commands
- Advanced: Pre-configured permissions and hooks

### Phase 3 - Build
- Building your MVP from your project spec
- 3 development workflows: General, Issue-based, Multi-agent
- Git worktrees for running multiple Claude instances
- Tips for staying productive

## Timestamps

- 00:00 Don't make the same mistake I did
- 02:30 Phase 1: PLAN
- 02:54 2 Questions to ask before starting
- 04:44 How to use AI to help you plan
- 06:14 Creating a project spec doc
- 11:36 Phase 2: SETUP
- 12:04 GitHub Repo setup
- 13:32 Create your environment variable file (.env)
- 13:50 CLAUDE.md (and what to put in it)
- 15:57 Automated Project Documentation
- 18:24 Install Plugins
- 19:33 Install MCP Servers
- 20:52 Setup Custom Slash Commands and Sub-agents
- 23:22 Advanced setup: Preconfigure Permissions
- 24:09 Advanced setup: Hooks
- 24:55 Phase 3: BUILD
- 25:41 Building Your MVP with Claude
- 26:33 Workflow 1: Single Feature Development
- 27:49 Workflow 2: Issue based development
- 29:19 Workflow 3: Multi-Agent Development (Multi-Clauding)
- 30:39 Tips for Building Productively
- 33:04 Applying what you learned

---

## Full Transcript

I used to start my Claude code projects completely wrong. I'd type Claude into my terminal and just start freestyle prompting with no planning, no setup, and no system for building. It was like trying to build a house without blueprints. I eventually got something built, but it was messy, inefficient, and full of problems I could have avoided. But after building dozens of projects with cloud code over the past year, I've discovered a simple three-part system that makes every project 10x easier to build from day one. And in this video, I'm going to save you months of frustration and wasted time by sharing the exact system that I use to start every new claw code project. I call it the PSB system for plan, setup, and build.

Phase one is plan. This is where you set up your project for success before you write a single line of code. We'll cover the two critical questions I asked myself before building and creating a project spec doc that combines both product requirements and engineering design so Claude can build exactly what you want the way that you want it.

Phase two is setup. This is where you configure Claude Code with everything that it needs to build effectively. We'll cover my sevenstep setup checklist for Claude Code. From setting up a GitHub repo and creating your claw.md file to advanced features like plugins, MCPs, and custom commands.

Phase three is build. This is where you'll start writing code first by building your MVP and then the rest of your project milestones. We'll cover the three development workflows that I use for every project. the general workflow for single features, issue based development for staying organized, and multi-agent development for working on multiple features simultaneously. Plus, I'll share the most important tips that I've learned to keep your building process with Claude Code productive and efficient.

So, whether you're starting your first Cloud Code project or you already use Cloud Code every day, I guarantee that you're going to learn something from this video that's going to help you build faster and smarter with Claude Code. even if you don't use a whole system and just apply a handful of these tips that I'm going to share.

But before we dive in, I'm Afar and I teach people about the best AI coding tools and how to get the most out of them, no matter your skill or experience level. So if you're trying to level up with AI coding tools, maybe it's for your job or for your business or maybe even a side project, please subscribe to the channel and turn on notifications for more videos about AI coding.

All right, with that out the way, let's get into phase one of starting a new claude code project, and that's planning.

## Phase 1: PLAN

We're going to cover the two most important questions to ask yourself. How to create a project spec doc that captures both product and engineering requirements, and how to use AI to help you plan at every step of the way. And look, I get it. Planning sounds boring. You want to start coding, but trust me on this one. Spending just 15 minutes planning your project up front will save you hours, sometimes even days of frustration down the line.

Now, before I even open Claude Code, I do a brainstorm of what I want to achieve with the project. Specifically, I ask myself two questions and note down the answers using a pen and paper or a Google doc.

### Two Critical Questions

**Question 1: What are you actually trying to do?**

What is the goal of your project? Are you trying to:
- Learn a new technology?
- Validate an idea with customers?
- Build an alpha version of a product or feature?
- Just prototype to see if something is possible?

Getting clear about what you're actually trying to do changes everything about how you approach the project. It tells you what's important to build versus what you can skip. For example, if you're just trying to prototype to see if a feature is a good idea, you can just focus on the core functionality for that feature. You don't need to worry about production-ready code or edge cases. you can move fast and break things. But if you're building something you want to ship to real users, then you need to think about things like security, error handling, edge cases, and all the details that make your product feel polished.

A key thing to keep in mind when you're planning is that the clearer you are, the better Claude will understand what you're trying to achieve and build accordingly.

**Question 2: What are the milestones of functionality that you want?**

This is where you can start breaking down your project into clear phases. What does version one look like? Maybe it just focuses on one core feature. What are you okay with leaving out or saving for future versions? And then you can apply that same thinking to version two, version three, and so on.

For most projects, I like to think in terms of an MVP or minimum viable product and then one or two versions of improvements. The MVP is the absolute minimum you need to validate your idea or prove that the concept works. And then in future versions, you can add things like scaffolding, polish, or optimizations.

### Using AI to Help You Plan

Next up in phase one is using AI to help you plan. Once you have your brainstorm, this is where you can use AI to help you flesh out the plan for your project. And here's my pro tip for using any AI to help you plan: **Tell it to ask you questions.**

For example, when I start a new project, I give Claude my brainstorm in a markdown file and ask, "Hey, Claude, I want to build this project. What are the three most important questions I need to answer in order to build an MVP of this successfully?" Claude will then ask me clarifying questions about the brainstorm to help me spot things that I haven't fully thought through or decisions that need to be made. And by answering these questions, I get way more clarity about what I'm actually trying to build.

The cool thing is that you can repeat this trick of getting the AI to ask you questions for any aspect of the planning or building process. Whether it's figuring out product requirements or technical tool choices or just debugging a gnarly issue.

The other tool that I use for planning is just having a conversation with a claude assistant or chatbt using voice mode. I literally just talk through my project idea out loud talking about the different features that I want, the user flows, and then I ask it to summarize our conversation and put it in a markdown file that I can use as a starting point with clawed code. Having a voice conversation with AI is super useful in the planning process cuz that's when your ideas are still fuzzy and sometimes it's hard to write things down because you don't even know what you think and so saying it out loud helps you process your ideas a lot more easily.

### Creating a Project Spec Doc

All right, so now we get to the main deliverable of the planning phase, which is your **project spec doc**.

The project spec has two main parts:
1. Product requirements
2. Engineering requirements

It contains the essential product ideas and engineering design information to help claude code successfully build your project. I'll note that how detailed your project spec doc needs to be depends on your project goal and your milestones. This is why it's important to get clear on those first.

Now, if you've worked at a software company before, you might be familiar with a product requirements doc or PRD and engineering design docs or EDDDs. The project spec doc is basically a much more lightweight version of that, but tailored for building with claw code.

#### Part 1: Product Requirements

The product requirements are about **what you're building and why**. It answers three key questions:
- Who is a product for?
- What problems does it solve?
- What should the product do?

This is where you exercise your creativity, your insight, and your product sense. You need to think about who you're building for and what problems you want to solve for them. Sometimes that person is you. So, take some time to think about it.

**Key insight:** You'll likely need to spend some time outlining exactly what you want in terms of how the problems are solved from a user perspective. Because if you're not specific about the user interactions that you want, Claude might make assumptions and you might not like what you get.

For example, if you're building a journaling app, don't just say "users can create journal entries." Be specific:
- What does creating an entry look like?
- Do they start with a blank page or do they start with prompts?
- Can they add photos?
- Can they edit past entries?
- What does a workflow look like?

The more specific you are about the user experience that you want, the better Claude will be at building it.

**Another key thing:** Don't try to build everything at once. Break your project down into clear milestones for capabilities. This is where the milestone question we asked ourselves earlier comes in handy. What are the most important things to build first and define what done looks like for each milestone so you have a clear target to hit.

**Pro tip:** If you're not sure about your product requirements, that's totally okay. Build version one first and then based on what you like or dislike about it, you can create a plan for version two. Iterate on your product requirements as you build.

#### Part 2: Engineering Requirements (Technical Requirements)

While the product requirements cover what you're building, the engineering design is about **how you're building it**.

**Choosing Your Tech Stack**

The first and most important part of your engineering requirements is choosing your tech stack. Depending on the type of product that you're building, you'll need to decide on things like:
- Programming language
- Preferred front-end framework
- Backend framework
- Database choice
- Hosting and infra provider
- Other components you'd like to use

**Why this matters:** If you don't specify your stack, Claude might just inject random technology choices that you might not want. So, I always start by being really explicit about my stack preferences.

**Avthar's Preferred Stack for Web Applications:**

**Front-end:**
- Hosting: Vercel
- Framework: Next.js
- Styling: Tailwind
- Components: Shadcn

**Back-end & Database:**
- MongoDB or Supabase (depending on the project)

**Authentication:** Clerk
**Payments:** Stripe
**Email:** Resend
**Back-end Hosting:** Digital Ocean (if needed)
**Object Storage:** Cloudflare R2

**AI Features:**
- Anthropic models (general)
- Google Gemini Nano Banana (for images)

**What if you're not sure?** Just ask Claude! Describe your requirements and ask Claude Code to create a research report with options and recommended choices for you. Claude Code has web search built-in so it can look up the latest docs, tools, and frameworks and give you informed recommendations.

**Defining Your Technical Architecture**

The second part of your technical requirements is defining your technical architecture. This includes:
- System design overview
- Key components of your app and how they interact
- Database schema
- API design (if you have one)
- Other technical details that matter for your project

I usually delegate most of this to Claude, but if you're using Claude code at work or on a team, you likely want to be more prescriptive with the implementation details in order to follow the best practices that your team uses.

For example, if you're working at a company that has specific patterns for system design, you might want to document those in your engineering design so that Claude follows them.

**Infrastructure Provisioning**

Part of this technical architecture step often involves actually provisioning the infrastructure that you need. So once you've decided what infra you want to use, go ahead and provision it:
- Create your database
- Set up your hosting
- Create your API keys
- Do it all now so that Claude can move fast when you start building

**That wraps up the planning phase. You're now ready to move to phase two, which is claude code setup.**

---

## Phase 2: SETUP

All right, phase two is the setup phase. This is where we're going to cover the seven-step checklist that I use to set up claude code for successful development. And by the end of this section, your cloud code is going to feel like a perfectly tuned instrument with all the shortcuts, automations, and context that it needs to build your project effectively.

**Note:** You don't need to use all the things I recommend in the setup section to improve your existing workflow. Just pick and choose the things that you feel is relevant to your project.

### Step 1: Set Up a GitHub Repo

You can just build locally with Git, but I strongly recommend setting up a GitHub repo from the start for a few key reasons:

1. **Claude Code on web and mobile** - Setting up a GitHub repo enables you to use Claude Code on the web and mobile, so you can code from anywhere.

2. **GitHub CLI and Actions** - You get access to the GitHub CLI and the Claude Code GitHub action. This is super useful for reading project and branch history and creating pull requests. And the GitHub action is useful for automated PR reviews and mentioning claude to handle issues.

3. **Infrastructure Integration** - Many infrastructure providers like Vercel enable you to deploy just by connecting a GitHub repo. And in the case of Vercel, it also supports deploy previews for each branch of your project. This makes using branches a no-brainer for developing new features or trying new product directions while keeping your main branch stable.

Generally, I ask Claude Code to use a new branch for each big new feature that it develops. And then when it's done, we merge or submit a PR against the main branch.

4. **Issue-based Development** - A GitHub repo enables issue-based development. This helps keep your project super organized as it makes GitHub issues the source of truth for things like bugs and feature requests. And it also means that you can use multiple instances of cloud code to tackle multiple issues at the same time.

We'll cover issue based development and multi-agent development in more depth in the build section later in the video.

### Step 2: Create Your Environment Variable File

To do this:
1. First ask Claude to create an example .env file based on your project spec and tech stack
2. Then create a copy of that and fill in your needed credentials and API keys so that Claude can build with them without stopping to ask you

### Step 3: Set Up Your CLAUDE.md File

You can think of your claw.md file as your **project's memory**. It's always included in context for every chat that you have with clawed code.

**Important:** Your claude.md file is finite. So don't bloat it. You want to keep it focused on the most important information.

**What goes inside a claude.md file?**

There's no one-size-fits-all answer, but in general, you want to put information about your project that Claude absolutely needs to know. Here are some suggestions:

1. **Project goals and architecture overview** - This gives Claude a big picture grounding of the project and the folder layout

2. **Design style guide and user experience guidelines** - This keeps your code that is generated by Claude aligned with your project and design goals

3. **Constraints and policies** - This prevents unsafe or forbidden actions. For example, you can tell Claude never to push to the main branch directly or always use environment variables for secrets

4. **Repository etiquette** - For example, telling Claude when to use things like PRs versus direct mergers, how to name branches, and other Git workflows

5. **Frequently used commands** - Like those for building and testing so that Claude can run them without asking

6. **Testing instructions** - And other rules and constraints that you want Claude to follow

**Pro tip:** One of the most impactful ways to keep your claude.md concise is to **link off to other files**. Tell Claude about files that have important context in the claw.md file and tell it to reference them for the full picture. For example, you can link off to your project spec doc from the plan phase as well as an architecture.md file versus repeating that information. That way, you can give Claude important information about your project without unnecessarily clogging up the context window.

**Finally:** Don't worry about making your claude.md file perfect on day one. You'll build it up iteratively as you work on your project, and we'll cover more about this in the build phase later in the video.

### Step 4: Set Up Automated Documentation

Automated documentation is my term for a **set of documents that is separate from your claw.md file** that maintains context about your project which claude can read when it needs to. These are the sort of docs that you link off to in your claw.md. You ask Claude to keep these docs up to date as you work.

That way you'll always have the latest context in your sessions. This is incredibly useful for development, planning, or even just refreshing your memory about a project or feature.

**Four Core Documents for Every Project:**

**1. architecture.md**
- Documents your system design, app structure, and how the major components interact
- Keep this updated after you add big features

**2. changelog.md**
- A list of things that's changed in your project over time
- It's common for companies to put out change logs whenever they do new releases or at the end of every week or every month
- This is helpful for Claude code projects because it helps you see what work has been done and also gives Claude an overview of how the project has evolved over time

**3. Project Status Doc**
- What are the project milestones?
- What have you already accomplished in relation to those milestones?
- Where did you end off last time?

This is a personal favorite because I tend to work in bursts and sometimes don't touch a project for a few days or even a few weeks and so it's helpful for me and Claude to pick back up right where we left off.

**4. Reference Docs for Key Features** (Optional)
- Technically optional since you can just use the codebase search sub agent in claude code
- But I like building these to get a high-level overview of a feature so that I can plan how to improve it or fix bugs in it
- Examples: In an iOS app - docs for onboarding and push notifications; In a web app - docs about how payments were implemented, about how time zones worked in an email reminder feature

**How to keep these docs updated?**

Ask Claude to automatically update the docs as it works, either with:
- An instruction in your claw.md, OR
- A custom slash command that claude can run after it finishes a feature (this is my personal preference)

### Step 5: Set Up Plugins

Plugins extend Claude code with specialized commands and workflows that make development faster and easier. A plug-in consists of any combination of:
- Slash commands
- Sub agents
- MCP servers
- Hooks
- Skills

Plugins enable you to easily take the best customizations from other Claude Code users and use them in your own projects without recreating them.

You can find plugins using one of the many plug-in marketplaces around and you can manage them using the `/plugins` command in Claude Code.

**Recommended Plugins for New Projects:**

1. **Anthropic front-end plugin** - Adds specialized skills for front-end development, giving you better UIs and avoiding that dreaded purple gradient

2. **Anthropic feature dev plugin** - Helps streamline the feature development process

3. **Every compound engineering plugin** - Adds a whole suite of useful slash commands and sub agents with the goal of making every feature easier to develop than the last, helping your project continuously improve

### Step 6: Set Up MCPs (Model Context Protocol Servers)

MCPS are integrations that connect Claude code to external tools and services. They're incredibly useful because they let Claude interact with your database, test your front end, deploy to hosting, and do all sorts of other things that it couldn't do otherwise.

**Which MCPs should you set up for a new project?**

This is where your tech stack from the plan phase comes in handy. You might not need all of them, but try out the MCPS for key parts of your tech stack that you think would speed up your work.

**Recommended MCPs:**

**For Database Work:**
- MongoDB MCP or Supabase MCP (whichever database you're using)
- This is especially important when you're rapidly iterating and adding features because Claude can just update your database schema automatically

**For Web Apps:**
- Playwright MCP or Puppeteer MCP
- These help claude code see your web app in action, which is super useful for things like automatically testing user flows

**Other MCPs for the Recommended Tech Stack:**
- Vercel MCP (for deployment)
- Mixpanel MCP (for analytics)
- Linear MCP (for project management)

**To connect MCPs:** Just follow the commands in the docs for the MCP server of your choice. There's usually a one-line install to add it to Claude Code.

### Step 7: Set Up Slash Commands and Sub-Agents

Both slash commands and sub agents are automated ways for Claude to perform specific tasks and workflows, but they work differently. Understanding the difference is really important.

**Slash Command:**
- A shortcut to a prompt or a task
- Uses the **same context window** as your main conversation

**Sub-Agent:**
- A specialized agent for a specific task
- Uses a **fork of your context window** which means it's unrelated to your main conversation and other sub agents
- Sub agents don't know about each other
- This makes them perfect for parallel work and specialized tasks that need focus context

You can use:
- Built-in slash commands and sub agents that come with cloud code
- Third party ones from plugins
- Create your own custom ones

**Recommended Built-in Sub-Agents:**
- Planning sub-agent
- Codebase search sub-agent
- They work great out of the box and you can invoke them manually or let Claude use them automatically when it sees fit

**Three Recommended Custom Sub-Agents for New Projects:**

1. **Change log sub agent** - To create and update change log entries after you finish a feature

2. **Front-end testing sub agent** - A specialized agent that focuses just on testing your front end and can run playwright tests automatically

3. **Retro agent** - Reflects on what can be improved after a development session, then updates things like your claw.md, your prompts, your slash commands with its learnings. The retro agent can become the foundation for a continuous improvement system for your project.

**Recommended Slash Commands from Anthropic Plugin:**
- `/commit` and `/pr` for committing changes
- Feature dev slash command

**Custom Slash Commands (Examples):**
- A slash command that updates all project docs from the automatic documentation based on recent changes
- A slash command that creates GitHub issues based on an input project spec or a prompt

Custom slash commands and sub agents close the loop on some of the other setup steps like the automated documentation and plugins and MCPs.

**That's the seven-step setup checklist.**

### Bonus Advanced Setup Tips

These are not strictly required, but useful for advanced Claude Code users.

**Bonus Step 1: Preconfigure Permissions and Settings**

This allows you to pre-approve or pre-block certain commands so that Claude Code doesn't have to ask you or you don't have to prevent Claude from running them.

For example, if you want Claude Code to always be allowed to run git commands or edit files without asking you, you can specify that in your settings.

**Why this helps:** Preconfiguring your permissions helps avoid the frustrating problem of thinking Claude is working on something, going to get a cup of coffee, and then coming back to find that Claude was actually stuck waiting for permission the entire time.

**Bonus Step 2: Set Up Hooks for Advanced Automation**

Hooks let you insert determinism into your Claude code workflow. They're basically scripts that can run automatically at certain points in the Claude code life cycle, like before a tool call or after Claude finishes a task.

**Example Hooks:**
- **Stop hook** - Checks if tests pass when Claude finishes, and if they don't, the hook tells Claude to keep going and to fix them
- **Notification hook** - Pings me on Slack when Claude needs permission to do something, so I don't have to be at my terminal all the time

Hooks are pretty advanced and they can seem intimidating, but I highly recommend you try them out and think about even just one hook that you can use in your workflow after watching this video.

**This brings us to the end of the setup phase. At this point, Claude has everything it needs to start building your project. Next up is the final phase of the PSB process, the part that you've all been waiting for: the build phase, where we can finally start writing code with Claude.**

---

## Phase 3: BUILD

All right, phase three is the build phase. This is where we'll start building our new project with Claude. And just as with the plan and the setup phases, having the right workflows in the build phase makes all the difference between frustration and smooth sailing.

In this section, we're going to cover:
- Building your MVP with Claude
- Three workflows for building new features with Claude code
- The most important tips to keep your building process productive and efficient

### Building Your MVP with Claude

At this point, you have your project spec doc and your milestones for your project documented. The next step is to have Claude build milestone one of your project based on your project spec.

**Pro tip:** Ask Claude to use parallel sub agents where possible during the implementation. This can speed up the development process significantly because Claude can work on multiple parts of your project at the same time.

**As always:** I recommend using plan mode first so that Claude can translate your project spec into its own implementation plan for better results.

### Three Development Workflows

Now that you've built your MVP, let's talk about how to build the rest of the milestones in your project.

#### Workflow 1: General Workflow (Single Feature Development)

This is what I recommend using when developing a single feature end to end.

The general workflow has four parts:

**1. Research** (Optional)
- Ask Claude to create a research report
- Or use external research you've done in ChatGPT Deep Research
- Helpful for bigger features where Claude needs to make tech stack decisions or look up specific APIs you're using for the first time

**2. Plan** (Most Important!)
- **The most common mistake people make with claude code is not using plan mode enough**
- When Claude is in plan mode, it'll think through the task, break it down into steps, and ask you clarifying questions before it starts building
- This leads to way better results

**3. Implement**
- Claude will automatically use all the plugins, sub agents, MCPs, and slash commands that we set up in phase 2
- One example to use explicitly: the feature dev slash command from the anthropic plugin

**4. Test**
- This is where all the configuration from the setup phase comes in handy to speed up development

#### Workflow 2: Issue-Based Development

In this workflow, GitHub issues become your source of truth for features and tasks. Rather than only prompting Claude directly, you can create GitHub issues describing bugs, improvements, and new features and ask Claude to work on them.

**Why use this workflow?**
- Helps keep the project tidy because GitHub is your source of truth versus having several to-do files or feature.md docs lying around in your repo
- This is part of the reason why we set up a GitHub repo in the setup phase

**How to use it:**
- Be disciplined about splitting your work into GitHub issues
- You can ask Claude Code to help take your project spec and your milestones and turn them into GitHub issues
- You can also create issues manually on the fly

**Automation:**
- You can automate it with a slash command or sub agent
- Example: A slash command that takes in a file or folder and outputs a list of GitHub issues in your repo using the GitHub CLI

**Benefit for parallel work:**
- Using GitHub issues means you can ask Claude to tackle multiple issues using sub agents in the same session (useful for fixing a bunch of bugs quickly in parallel)
- You can also use multiple instances of cloud code to tackle issues in parallel (useful for adding multiple bigger features at the same time)

#### Workflow 3: Multi-Agent Development (Multi-Clauding)

This is the most advanced development workflow and it enables you to work on multiple features at the same time.

The multi-agent workflow is also known as **multi-clouding** in cloud code because you run multiple cloud code instances at the same time with each session working on a different feature.

**How do they stay coordinated? Won't the changes conflict?**

This is where **git work trees** come in. Git work trees let you have multiple working copies of your repo in different directories each on a different branch.

Git work trees means that each claude code session can work in its own work tree with isolated files while still sharing the same git history.

**When your multiple instances are done working:**
- You can ask Claude to merge the work trees together either directly into the main branch or into a feature branch so that you can test and review further (this is what I usually do)

**Note:** I've used the multi-agent workflow to work on three features at once, and it's incredibly powerful, but it does require some knowledge about how to set it up and manage it.

---

### Four Tips for Staying Productive During Build Phase

**Tip 1: Use the Best Models as Much as Possible**

This means using the newly released Opus 4.5 or at least using Sonnet as much as you can, especially for important tasks where quality really matters.

**My model usage since Opus 4.5 was released:**
- **Opus** - For planning and complex tasks
- **Sonnet** - As an implementation workhorse
- **Haiku** - Only for simple, straightforward tasks and bug fixes

**Reasoning:** The time that I save by using a better model that makes fewer mistakes is more valuable than the money saved from using a cheaper model that makes more mistakes that I have to spend more time fixing.

Plus, I like to live on the edge and see the best of what these models are capable of. So, that's why I like to use Opus as much as possible.

**Tip 2: Periodically Update and Tune Your claude.md File**

We might have set up our claw.md file in the setup section, but as part of this build phase, I recommend periodically updating it as you add new features or reach new milestones with your project.

**Pro tip:** You can create a custom slash command to have Claude first update your claw.md file and then create a git commit as part of your git workflow. This ensures that your documentation and code can stay in sync.

**Tip 3: Practice Regression Prevention**

When you see Claude make a mistake, don't just fix it and move on. Instead, just type hashtag or pound (`#`) on your keyboard to give Claude an instruction that it will then automatically incorporate into the relevant claw.md file.

This allows you to quickly update your claw.md file on the fly without manual edits.

**Tip 4: Don't Be Afraid to Throw Away Work**

Remember, code is cheap. So if something isn't working, especially in the prototype stages, don't be afraid to undo it or throw away a feature completely and start again, as this can often help you get to a solution that you're actually happy with faster.

**Claude code's checkpoints and rewind are very useful here.** It gives you session level recovery in addition to the project level version control that you get with Git.

---

## Summary

And that brings us to the end of the tips to keep you productive when building with Claude Code and to the end of phase three, the build phase.

The PSB System:
1. **Plan** - Define goals, milestones, and create project spec
2. **Setup** - Configure Claude Code with repos, docs, plugins, MCPs
3. **Build** - Implement using general, issue-based, or multi-agent workflows

Now if you learned something from this video, don't forget to like and subscribe for more AI coding videos. And leave a comment with what you learned or with any questions that you have.
