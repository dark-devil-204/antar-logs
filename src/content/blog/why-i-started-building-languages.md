---
title: "Why I started building languages"
date: 2026-04-03
description: "From curiosity about hacking to building my own language and understanding how systems actually work."
tags: ["system", "programming-languages", "vm", "learning", "go"]
---

I did not start with systems, compilers, or programming languages.
I got interested in hacking before I understood how system actually works.
Around 8th grade, I wanted to become a so called "ethical hacker" inspired by series like FSociety. Like most people at that stage, I went through Youtube tutorials, purchased courses from **Udemy** , installed **Kali Linux**, ran scripts, and thought I understood what was goind on.
In reality, I was just copying commands and executing things I barely understood.
At some point, it became obvious that if I wanted to go deeper, I needed to actually learn programming and the underlying concepts of Operating Systems and Networks.
So I started with PHP.

## The PHP phase

PHP was my first real exposure to building things.
I wrote simple login and registration systems, small apps and even a chat application. The chat app used jQuery with a 1-second polling.

Some of those projects still exists (and is very very questionable now):

- Login system: https://github.com/AntarMukhopadhyaya/PHP-Login-System
- Chat application: https://github.com/AntarMukhopadhyaya/chatroom

It worked, but looking back, everything was extremely fragile.

There was no understanding of security. No prepared statetments. Everything was vulnerable to SQL injection.

But it didn’t matter at that time. What mattered was that things worked, and I was learning by building.

## Switching to Python and Django

In class 12, Python became part of the curriculum, and I naturally moved towards it.

That’s when things started to become more structured.

With Django, I began to understand:

- how projects are organized
- how backend and database interact
- how to design slightly more maintainable systems

I built forums, worked with SQL more seriously, and got comfortable with HTML, Bootstrap, and some jQuery.

This phase was less about hacking and more about understanding how systems are put together.

## The JavaScript hesitation

When Node.js started becoming popular, I was skeptical.

I didn’t trust JavaScript on the server. It felt wrong.

So for a while, I stayed with Django, even while experimenting with frontend frameworks like React. Eventually, curiosity won, and I tried Next.js.

That changed things.

Next.js made me very productive. It felt practical. I started using it for most of my projects.

## Where things changed: systems and languages

The real shift happened during my 4th–5th semester.

I started wondering:

- how are programming languages actually executed?
- how was the first compiler built?

This led me into formal theory, and then into building my own language.

## Building my first language

At first, I followed tutorials and built a simple interpreted language using TypeScript.

This playlist was the starting point: [Build a Custom Scripting Language In Typescript](https://www.youtube.com/watch?v=8VB5TY1sIRo&list=PL_2VhOvlMk4UHGqYCLWc6GO8FaPl8fQTh)

But that was just the entry point.

I kept going deeper:

- adding control flow (loops, conditionals)
- implementing try-catch
- understanding parsing and execution

Eventually, I rewrote it and moved to Go.

Go felt closer to the system level, and since I already had some background in C from college, concepts like pointers and structs made sense.

That’s when things started to click.

## From interpreted to compiled, stack to register

Initially, my language was purely interpreted.

Every instruction was evaluated directly, which was simple but inefficient.

So I started experimenting with compilation — first into a basic bytecode.

That opened up another set of questions.

How should the VM execute instructions?

I first implemented a stack-based VM, because it’s simpler to reason about. Push values, pop them, operate — straightforward.

But as the system grew, the limitations became clearer:

- too many push/pop operations
- harder to optimize
- less explicit control over data

So I moved towards a register-based VM.

This forced me to think differently:

- explicit data movement
- instruction design
- trade-offs between simplicity and performance

That transition alone taught me more than any tutorial could.

## The event loop mistake (and learning)

At one point, I thought:

why not make a multi-threaded event loop?

I didn’t like the idea of JavaScript’s single-threaded model. It felt limiting.

But as I went deeper, I realized why that design exists.

Concurrency is not simple.

Problems like:

- race conditions
- deadlocks
- read/write conflicts

start appearing immediately.

What looked like a “simple improvement” was actually a complex system design problem.

That realization changed how I think about systems.

## What I’m doing now

Right now, I’m exploring two main directions:

- improving my language, Kairo (now moving towards a bytecode-compiled model with a register-based VM)
- building a Go-based framework where UI is written in Go and compiled to HTML

The framework includes:

- file-based routing (generated at compile time)
- nested layouts
- WebSocket-based updates

You can find Kairo here: https://github.com/AntarMukhopadhyaya/Kairo

It’s still evolving, but the goal is to understand systems deeply by building them.

## Why this blog exists

This blog is not a portfolio.

It is a log.

A place where I:

- document what I build
- question my own decisions
- refine my understanding

Most of what I write will probably be incomplete or wrong in some way.

But that’s the point.

## Closing

I started by being curious about hacking without really understanding systems.

Now I’m trying to understand how systems are built — and why they are built the way they are.

This blog is where I document that process.
